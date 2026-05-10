import AddProject from "./AddProject"; 
import SearchProject from "./SearchProject"; 
import {useState} from "react";  
import "./LandingPage.css";



function LandingPage () {     
    
    const [newProject, setNewProject] = useState([]) 

    function addProject (theProject) {         
        setNewProject ([...newProject, theProject])    
    }    

    
    return (       
        <div className="landing-page">       
            <h1>Personal Project Showcase App</h1>            
                <AddProject addProject={addProject}/>            
                <SearchProject newProject={newProject}/>         
        </div>    
        ) }  
        
export default LandingPage;