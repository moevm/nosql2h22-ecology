import React from "react";
import {PostDataMarkerJSON} from "../requests/RequestToAddMarkerToJSON";
// import {writeJsonFile} from 'write-json-file';
import saveJSON from "../../backend/SaveJSON";
import loadJSON from "../../backend/LoadJSON";

class AddMarkerFormWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 1.45,
            lon: 22.22,
            id: 3,
            name: "asfd",
            desc: "descr",
            danger_level: 2,
            pol_type: "chemistry",
            area: 100,
            district_name: "Saint-Petersburg"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.AddMarkerToJSON = this.AddMarkerToJSON.bind(this);
    }

    sendMarkerDataJSON() {
        PostDataMarkerJSON(this.state)
        console.log("posted");
    }

    AddMarkerToJSON() {
        // const data = loadJSON('data.json')
        // data.push(data)
        // saveJSON('data.json', data)
        console.log(this.state)
        this.sendMarkerDataJSON()
        console.log(this.state)
        this.saveDataToLocalStorage(this.state)
    }
    saveDataToLocalStorage(json){
        console.log("json = "+json)
        let united_data = this.getDataFromLocalStorage()
        console.log("united data = "+united_data)
        console.log(typeof united_data)
        // if (Array.isArray(united_data) === false){
        //     united_data = JSON.parse(united_data)
        // }
        united_data.push(json)
        console.log("end = "+united_data)
        saveJSON("data.json", united_data)
        localStorage.setItem("data", json)
    }
    getDataFromLocalStorage(){
        if (localStorage.getItem("data") === null) {
            return []
        }
        const localData = localStorage.getItem("data")
        return localData
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state)

    }
      render() {
        return (
            <div>
                <form>
                    <label className={"add-marker-form-1"}>
                        Lat
                        <input
                            name="lat"
                            type="number"
                            step="0.000001"
                            checked={this.state.lat}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-2"}>
                        Lon
                        <input
                            name="lon"
                            type="number"
                            step="0.000001"
                            value={this.state.lon}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-3"}>
                        Id
                        <input
                            name="id"
                            type="number"
                            value={this.state.id}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-4"}>
                        Name
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-5"}>
                        Description
                        <input
                            name="desc"
                            type="text"
                            value={this.state.desc}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-6"}>
                        Danger level
                        <input
                            name="danger_level"
                            type="number"
                            step="0.000001"
                            checked={this.state.danger_level}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-7"}>
                        Pol type
                        <input
                            name="pol_type"
                            type="text"
                            checked={this.state.pol_type}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-8"}>
                        Area
                        <input
                            name="area"
                            type="number"
                            checked={this.state.area}
                            onChange={this.handleInputChange} />
                    </label>
                    <label className={"add-marker-form-9"}>
                        District
                        <input
                            name="district_name"
                            type="text"
                            checked={this.state.district_name}
                            onChange={this.handleInputChange} />
                    </label>
                    <button type="button" onClick={this.AddMarkerToJSON} className={"add-marker-form-button"}> Add Marker </button>
                </form>
            </div>
        );
    }


}
export default AddMarkerFormWork
