import React from "react";
import '../frontend/components/Map.css'

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
            <div>
            <form onSubmit={this.handleSubmit.bind(this)} className={"add-marker-field1"}>
                <label>
                    Name:
                    <input type="text" value={this.state.names} onChange={this.handleChangeNames} />
                </label>
            </form>

            <form className={"add-marker-field2"} onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Description:
                    <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                </label>
            </form>
            <form className={"add-marker-field3"} onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Lat:
                    <input type="text" value={this.state.lat} onChange={this.handleChangeLat} />
                </label>
            </form>
            <form className={"add-marker-field4"} onSubmit={this.handleSubmit.bind(this) }>
                <label>
                    Lon:
                    <input type="text" value={this.state.lon} onChange={this.handleChangeLon} />
                </label>
            </form>
            <form className={"add-marker-field5"} onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Id:
                    <input type="text" value={this.state.idd} onChange={this.handleChangeId} />
                </label>
            </form >
            <form className={"add-marker-button"} onSubmit={this.handleSubmit.bind(this) }>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }

}
export default AddMarkerForm