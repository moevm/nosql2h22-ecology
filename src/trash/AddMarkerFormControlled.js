import React from "react";
import '../frontend/components/Map.css'

class AddMarkerFormControlled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            lat: 1,
            lon: 1,
            description: "desc",
            imya: "imya",
            ident: 123
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log(event.target.name)
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label className={"add-marker-controlled-1"}>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label className={"add-marker-controlled-2"}>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label className={"add-marker-controlled-3"}>
                    lat
                    <input
                        name="lat"
                        type="number"
                        value={this.state.lat}
                        onChange={this.handleInputChange} />
                </label>
                <input  type="submit" value="Submit" className={"add-marker-controlled-submit"} />

            </form>
        );
    }
}
export default AddMarkerFormControlled