import React from "react";
import './Map.css'

class AddMarkerForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            names: '1',
            lat: '2',
            lon: '3',
            description:'4',
            idd: '5'
        };

        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLon = this.handleChangeLon.bind(this);
        this.handleChangeNames = this.handleChangeNames.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLat(event) {
        this.setState({lat: event.target.lat});
    }
    handleChangeLon(event) {
        this.setState({lon: event.target.lon});
    }
    handleChangeNames(event) {
        this.setState({names: event.target.names});
    }
    handleChangeDescription(event) {
        this.setState({description: event.target.description});
    }
    handleChangeId(event) {
        this.setState({idd: event.target.idd});

    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.lat);
        console.log( this.state.lat);
        console.log( this.state.lon);
        console.log( this.state.names);
        console.log( this.state.description);
        console.log( this.state.idd);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className={"add-marker-button"}>
                <label>
                    Name:
                    <input type="text" value={this.state.names} onChange={this.handleChangeNames} />
                </label>
                <label>
                    Description:
                    <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                </label>
                <label>
                    Lat:
                    <input type="text" value={this.state.lat} onChange={this.handleChangeLat} />
                </label>
                <label>
                    Lon:
                    <input type="text" value={this.state.lon} onChange={this.handleChangeLon} />
                </label>
                <label>
                    Id:
                    <input type="text" value={this.state.idd} onChange={this.handleChangeId} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }

}
export default AddMarkerForm