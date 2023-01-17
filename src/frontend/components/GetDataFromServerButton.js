import React, {useState} from "react";
import {GetDataMarkerJSON} from "../requests/RequestToAddMarkerToJSON";
import './Map.css'

export default function GetDataFromServerButton({childToParent}) {
    // const [dataMarkers , setDataMarkers] = useState([])

    var dataMarkers =[]

    async function handleClick() {
        await GetDataMarkerJSON()
            .then(response => response.json())
            .then(data => {
                // console.log("1"+JSON.stringify(data))
                let strData;
                strData = JSON.stringify(data)
                console.log(strData)
                dataMarkers = strData
                // console.log("2"+dataMarkers)
            })
            // .then(data => {
            //     dataMarkers = data
            //     console.log("0"+data)
            //     console.log("1"+dataMarkers)
            // })

         console.log(dataMarkers)
        // dataMarkers = data
        childToParent(dataMarkers)

    }


    return (
        <div>
            <button onClick={handleClick} className={"get-data-button"}>
                Get Data From Backend
            </button>
        </div>
    )

}