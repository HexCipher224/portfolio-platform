import { useState } from "react";
import "./SearchProject.css";

function SearchProject({ newProject }) {

    const [query, setQuery] = useState("");

    const filtered = newProject.filter(
    (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

return (

    <div className="search-project-container">

    <input
        className="search-input"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
    />

        {newProject.length > 0 && (
        <p className="project-count">
            {filtered.length} of {newProject.length} project
            {newProject.length !== 1 ? "s" : ""}
            {query && ` matching "${query}"`}
        </p>
    )}

        {newProject.length === 0 ? (

        <p className="empty-message">
            No projects yet. Add one above.
        </p>

    ) : filtered.length === 0 && query ? (

        <p className="empty-message">
            No project match "{query}"
        </p>

    ) : (

        <ul className="project-list">

        {filtered.map((project) => (

            <li key={project.id} className="project-card">

                <div className="project-icon">
                    🚀
                </div>

                <div className="project-content">

                <strong className="project-title">
                    {project.title}
                </strong>

                <p className="project-description">
                    {project.description}
                </p>

            </div>

            </li>

        ))}

        </ul>

        )}

    </div>
    );
}

export default SearchProject;