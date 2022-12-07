import React from "react";
import './Map.css'
// import AddMarkerForm from "./AddMarkerForm";
class AddMarkerButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lat: 0.0,
            lon: 0.0,
            name: '',
            description:'',
            id: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        console.log(this.state.lat)
        console.log(this.state.lon)
        console.log(this.state.name)
        console.log(this.state.description)
        console.log(this.state.id)

        console.log("done")
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <div className="add-marker-button">
                <form onSubmit={this.handleSubmit} className="form-adding-marker">
                    <input type='number' name='lat' placeholder='latitude' value={this.state.lat} onChange={this.handleChange}/>
                    <input type='number' name='lon' placeholder='longitude' value={this.state.lon} onChange={this.handleChange}/>
                    <input type="text" name='name' placeholder='name' value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name='description' placeholder='description' value={this.state.description} onChange={this.handleChange}/>
                    <input type='number' name='id' placeholder='id' value={this.state.id} onChange={this.handleChange}/>
                    <input type="submit" value="Add marker" />
                </form>
            </div>

        )
    }
}

export default AddMarkerButton
