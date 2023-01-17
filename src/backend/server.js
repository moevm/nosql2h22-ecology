// import loadJSON from "./LoadJSON";


const express = require("express");
const PORT = process.env.PORT || 5000;
const server = express();
const fs = require('fs')

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function loadJSON(filename = '') {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            :'""'
    )
}

const dataJson = loadJSON("data.json")

server.get("/data", (req, res) => {
    // res.status(200).send();
    console.log("GET Request\n sending data = " + JSON.stringify(dataJson))
    res.send(JSON.stringify(dataJson))
});

server.post("/", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log("recieved");

});
server.listen(PORT, () => console.log(`listening on port ${PORT}`));