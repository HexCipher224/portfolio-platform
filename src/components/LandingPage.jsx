import AddProject from "./AddProject";
import SearchProject from "./SearchProject";
import { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
    const [newProject, setNewProject] = useState([]);

    function addProject(theProject) {
    setNewProject([...newProject, theProject]);
    }

    return (
    <div className="landing-container">
        <header className="landing-header">
        <h1>Personal Project Showcase App</h1>
        <p>Manage, track, and showcase your projects easily</p>
        </header>

        <main className="landing-main">
        <section className="form-section">
            <AddProject addProject={addProject} />
        </section>

        <section className="search-section">
            <SearchProject newProject={newProject} />
        </section>
        </main>
    </div>
    );
}

export default LandingPage;