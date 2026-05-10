import AddProject from "./Addproject";
import Searchproject from "./Searchproject";
import {useState} from "react";

function LandingPage () {
    const [newProject, setNewProject] = useState([])
    function addProject (theProject) {
        setNewProject ([...newProject, theProject])
    }
    return (
        <div>
            <h1>Personal Project Showcase App</h1>
            <AddProject addProject={addProject}/>\
            <Searchproject newProject={newProject}/>
        </div>
    )
}

export default LandingPage;