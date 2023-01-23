import React from "react";
import './Map.css'
import ExportData from "./ExportData";
// import AddMarkerForm from "./AddMarkerForm";
class UpdateButton extends React.Component{


    render() {
        return(
            <div className="update-button">
                <input type="submit" value="Update" />
            </div>

        )
    }
}

export default UpdateButton
