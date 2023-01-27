import "./styles.css";
import ExportData from "./ExportData";
import {GetDataMarkerJSON} from "../requests/RequestToAddMarkerToJSON";
export default function ExportDataButton() {
    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
        )
    }
    let bigData;
    function getDataFromLocalStorage(){
        if (localStorage.getItem("data") === null) {
            return []
        }
        const localData = localStorage.getItem("data")
        return localData
    }
    async function GetDataRequest() {
        await GetDataMarkerJSON()
            .then(response => response.json())
            .then(data => {
                // console.log("1"+JSON.stringify(data))
                let strData;
                strData = JSON.stringify(data)
                console.log(strData)
                bigData = strData
            })
    }
    async function downloadTxtFile(){

        // data = getDataFromLocalStorage()
        await GetDataRequest()
        let fileData = bigData
        console.log(fileData)
        const file = new Blob([fileData], {
            type: "text/plain;charset=utf-8}"
        });
        const url = URL.createObjectURL(file);
        const element = document.createElement("a");
        element.href = url
        element.download = "data.json"
        element.click();

    };

    return (
        <div className="export-button">
            <input id="input"/>
            <button onClick={downloadTxtFile}>Export Data </button>
            />
        </div>
    );
}
