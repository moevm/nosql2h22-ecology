// import {fs} from "node-sass";
import fs from "fs";

export default function saveJSON(filename = '', json = '""') {
    return fs.writeFileSync(filename,
        JSON.stringify(json, null, 2))
}