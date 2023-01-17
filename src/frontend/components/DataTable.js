import React from "react";
import './DataTable.css';
import {useNavigate} from "react-router-dom";

const data = [
    { lat: 22.222, lon: 19.13, name: "ETU", desc: "ab", last_change: "2022-07-23T18:25:43.511Z"},
    { lat: 22.21212, lon: 19.14, name: "ITMO", desc: "ab", last_change: "2022-06-23T18:25:43.511Z"},
    { lat: 10.122, lon: 19.15, name: "MSU", desc: "ab", last_change: "2022-05-23T18:25:43.511Z"},
]
export default function DataTable() {

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/MapAdmin');
    };
    return(
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Description</th>
                    <th>Last change time</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.lat}</td>
                            <td>{val.lon}</td>
                            <td>{val.desc}</td>
                            <td>{val.last_change}</td>
                        </tr>
                    )
                })}
            </table>
            <button className={"DataTable-button"} onClick={navigateHome}>DataTable</button>
        </div>
    );
}