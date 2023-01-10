import React from "react";
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
            description: "descr"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
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
    // file_name, json
    // async writeToJson() {
    //     try {
    //         const response = await writeJsonFile('foo.json', {foo: true});
    //         console.log(response)
    //
    //     } catch (e) {
    //         console.log(`write to file FAILED : ${e}`);
    //     }
    // }
//     writeFileAtomic = require('write-file-atomic')
//     writeFileAtomic('message.txt', 'Hello Node', {chown:{uid:100,gid:50}}, function (err) {
//     if (err) throw err;
//     console.log('It\'s saved!');
// });
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
                    {/*<br />*/}
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
                            name="description"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleInputChange} />
                    </label>

                    <button type="button" onClick={this.AddMarkerToJSON()} className={"add-marker-form-button"}> Add Marker </button>
                </form>
            </div>
        );
    }

    AddMarkerToJSON() {
        // const data = loadJSON('data.json')
        // data.push(data)
        // saveJSON('data.json', data)
        console.log(this.state)
    }
}
export default AddMarkerFormWork
