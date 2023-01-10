import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

class Description extends React.Component {
    createButtonControl() {
        const MapHelp = L.Control.extend({
            onAdd: (map) => {
                const helpDiv = L.DomUtil.create("button", "");
                this.helpDiv = helpDiv;
                // set the inner content from the props
                helpDiv.innerHTML = this.props.title;

                // add the event listener that will create a marker on the map
                helpDiv.addEventListener("click", () => {
                    console.log(map.getCenter());
                    const marker = L.marker()
                        .setLatLng(this.props.markerPosition)
                        .bindPopup(this.props.description)
                        .addTo(map);

                    marker.openPopup();
                });

                // return the button div
                return helpDiv;
            }
        });
        return new MapHelp({ position: "topright" });
    }

    componentDidMount() {
        const { map } = this.props;
        const control = this.createButtonControl();
        control.addTo(map);
    }

    render() {
        return null;
    }
}

function withMap(Component : any) {
    return function WrappedComponent(props : any) {
        const map = useMap();
        return <Component {...props} map={map} />;
    };
}

export default withMap(Description);