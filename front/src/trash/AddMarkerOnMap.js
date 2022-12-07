import {useEffect} from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import '../components/styles.css'

export default function BootstrapButton() {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const buttonControl = L.control({
            position: "topright"
        });

        buttonControl.onAdd = function (map) {
            this._div = L.DomUtil.create("div", "myControl");
            const buttonElement = `<div class="btnWrapper">
      <button class="btn btn-primary">Sqq</button>
      </div>`;

            this._div.innerHTML = buttonElement;
            return this._div;
        };

        buttonControl.addTo(map);

        return () => {
            map.remove(buttonControl);
        };
    }, [map]);

    return null;
}