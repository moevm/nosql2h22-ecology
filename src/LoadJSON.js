const fs = require('fs')
// import {fs} from "node-sass";


export default function loadJSON(filename = '') {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            :'""'
    )
}



// const data = loadJSON('data.json')
//
// data.push(4)
//
// saveJSON('data.json', data)
//
// console.log(
//     loadJSON('data.json')
// )