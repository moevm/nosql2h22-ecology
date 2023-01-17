let express = require('express');
let router = express.Router();

const neo4j = require('neo4j-driver');

const uri = 'neo4j://localhost:7687';
const user = 'neo4j';
const password = 'test';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

const session = driver.session({database: 'neo4j'});



router.post('/', (req, res, next) =>{
    console.log(req.body);
    let node = {id: req.body.id, lat: req.body.lat, lon: req.body.lon, name: req.body.name, description: req.body.description};
    createNode(driver, node);
})

router.get('/data', async (req, res, next) => {
    let result = await getNodes(driver)
    console.log(result.records[0]._fields[0].properties)

    let db = []
    let tempDB
    for(let i = 0; i < result.records.length; i++){
        let tempDB = {
            lat: result.records[i]._fields[0].properties.lat,
            lon: result.records[i]._fields[0].properties.lon,
            name: result.records[i]._fields[0].properties.name,
            desc: result.records[i]._fields[0].properties.description,
            last_change:"2022-07-23T18:25:43.511Z",
        }
        db.push(tempDB)
    }

    db = JSON.stringify(db);
    console.log(db);
    res.send(db);
})

async function createNode(driver, node){
    const result = await session.executeWrite(tx=>
    tx.run(`CREATE (marker: MARKER {id: ${node.id}, lat: ${node.lat}, lon: ${node.lon}, name: "${node.name}", description: "${node.description}"})`));
}

async function getNodes(driver){
    const result = await session.executeRead(tx=>
    tx.run('MATCH (marker: MARKER) RETURN marker'))

    return result;
}
module.exports = router;