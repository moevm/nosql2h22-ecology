const express = require("express");
const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.get("/api/hello", (req, res) => {
//     res.status(200).send("Hello World!");
// });

server.post("/", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log("recieved");
    response.sendStatus(200);
    response.json({message: "Hi there"});
});
server.listen(PORT, () => console.log(`listening on port ${PORT}`));