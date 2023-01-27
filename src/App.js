import React from "react";
import {useState} from "react";
import DataTableWitchSearch from "./frontend/components/DataTableWithSearch";
import MapComponent from "./frontend/components/MapAdmin";
import MapComponentUser from "./frontend/components/MapUser";
import LoginForm from "./frontend/components/LoginForm";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate
} from "react-router-dom";

function App() {

    const [loggedIn, setloggedIn] = useState(false);

    function callbackFunction(childData) {
        setloggedIn(childData);
    }

    return (
        <Router>
            <Routes>
                <Route path={"/MapAdmin"}
                       element={loggedIn ? <MapComponent/> : <Navigate to="/"/>}>

                </Route>
                <Route path={"/"}
                       element={
                           loggedIn ? (<Navigate to="/MapAdmin"/>) : (<LoginForm parentCallback={callbackFunction}/>)
                       }>
                </Route>
                <Route path={"/MapUser"}
                       element={
                    // loggedIn ? <MapComponentUser/> : <Navigate to="/"/>}>
                       <MapComponentUser/>}>
                </Route>
                <Route path={"/DataTable"}
                       element={<DataTableWitchSearch/>}>
                </Route>
            </Routes>
        </Router>

    );
}

export default App;
