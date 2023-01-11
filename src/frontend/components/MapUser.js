import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import './Map.css';
import "leaflet/dist/leaflet.css";
import L from "leaflet";


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponentUser extends React.Component {
    state = {
        lat: 59.97152978128397,
        lng: 30.3209661539183,
        zoom: 10
    };


    render() {
        var center = [this.state.lat, this.state.lng];


        return (

            <MapContainer zoom={this.state.zoom} center={center}>

                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

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
    }
}

export default MapComponentUser;