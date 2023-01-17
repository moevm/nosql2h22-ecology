const express = require("express");
const PORT = process.env.PORT || 5000;
const server = express();
const fs = require('fs')
// const saveJSON = require("./SaveJSON");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function saveJSON(filename = '', json = '""') {
    return fs.writeFileSync(filename,
        JSON.stringify(json, null, 2))
}
function loadJSON(filename = '') {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            :'""'
    )
}

const dataJson = loadJSON("data.json")

server.get("/data", (req, res) => {
    console.log("GET Request\n sending data = " + JSON.stringify(dataJson))
    res.send(JSON.stringify(dataJson))
});

function addMarkerDataToJSONFile(json) {
    console.log("json = "+json)
    let united_data = loadJSON("data.json");
    console.log("united data = "+united_data)
    united_data.push(json)
    console.log("end = "+united_data)
    saveJSON("data.json", united_data)

}

server.post("/", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    addMarkerDataToJSONFile(request.body)
    console.log(request.body);
    console.log("recieved");

});

// server.post("/upload", function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     console.log("recieved file");
//
// });

server.listen(PORT, () => console.log(`listening on port ${PORT}`));