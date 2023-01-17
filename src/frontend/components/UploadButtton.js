import React from "react";
import './Map.css'
// import AddMarkerForm from "./AddMarkerForm";
class UploadButton extends React.Component{
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
            <div className="upload-button">
                <input type="submit" value="Upload" />
            </div>

        )
    }
}

export default UploadButton
