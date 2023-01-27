import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import './Map.css';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import UpdateButton from "./UpdateButton";
import ImportDataButton from "./ImportDataButton";
import AddMarkerFormWork from "./AddMarkerFormWork";
import {useNavigate} from "react-router-dom";
import GetDataFromServerButton from "./GetDataFromServerButton";
import ExportDataButton from "./ExportDataButton";


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export default function MapComponent() {
    const state = {
        lat: 59.971529781,
        lng: 30.320966153,
        zoom: 10
    };
    // const [data, setData] = useState()

    let data = getDataFromLocalStorage()

    function saveDataToLocalStorage(json) {
        localStorage.setItem("data", json)
    }

    function getDataFromLocalStorage() {
        if (localStorage.getItem("data") === null) {
            return []
        }
        const localData = localStorage.getItem("data")
        return localData
    }

    var center = [state.lat, state.lng];

    const navigate = useNavigate();
    const navigateTable = () => {
        navigate('/DataTable');
    };

    const navigateLogin = () => {
        navigate('/');
    };

    if (Array.isArray(data) === false){
        data = JSON.parse(data)
    }

    return (

        <MapContainer zoom={state.zoom} center={center}>
            {/*<button className={"DataTable-button"} onClick={navigateTable}>DataTable</button>*/}
            <button className={"DataTable-button"} onClick={navigateTable}>DataTable</button>
            <button onClick={navigateLogin} className={"NavHome-button"}>Logout</button>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddMarkerFormWork/>
            <UpdateButton/>
            <ExportDataButton/>
            <ImportDataButton/>
            <GetDataFromServerButton/>
            {data.map((val, key) => {
                return (
                <Marker position={[val.lat, val.lon]}>
                <Popup>{val.desc}</Popup>
                </Marker>
                )
            })}
        </MapContainer>
    );
    // }
}

