import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import './Map.css';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import UpdateButton from "./UpdateButton";
import UploadButton from "./UploadButtton";
import AddMarkerFormWork from "./AddMarkerFormWork";
import {useNavigate} from "react-router-dom";


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

// class MapComponent extends React.Component {
export default function MapComponent(){
    const state = {
        lat: 59.97152978128397,
        lng: 30.3209661539183,
        zoom: 10
    };


    // render() {
        var center = [state.lat, state.lng];

    const navigate = useNavigate();
    const navigateTable = () => {
        navigate('/DataTable');
    };

        return (

            <MapContainer zoom={state.zoom} center={center}>
                <button className={"DataTable-button"} onClick={navigateTable}>DataTable</button>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/*<AddMarkerButton/>*/}
                {/*<AddMarkerForm/>*/}
                {/*<AddMarkerFormControlled/>*/}
                <AddMarkerFormWork/>
                <UpdateButton/>
                <UploadButton/>
                <Marker position={center}>
                    <Popup>Опять пожар</Popup>
                </Marker>
                {/*<BootstrapButton/>*/}
                {/*<Description*/}
                {/*    title={"My Button Title"}*/}
                {/*    markerPosition={[59.97152978128397, 30.3209661539183]}*/}
                {/*    description="This is a custom description!"*/}
                {/*/>*/}
            </MapContainer>
        );
    // }
}

// export default MapComponent;