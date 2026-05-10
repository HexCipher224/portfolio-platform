import {useState} from "react"; 
import "./AddProject.css" 

function AddProject ({addProject}) {

    const [project, setProject] = useState({
        title: "",
        description: ""
    })

    const [error, setError] = useState("")

    const update = (field, value) =>
        setProject({
            ...project,
            [field]: value
        })

    function handleSubmit(event) {

        event.preventDefault()

        if (!project.title.trim()) {
            setError("Project title required")
            return
        }

        addProject({
            id: Date.now(),
            title: project.title,
            description: project.description
        })

        setProject({
            title: "",
            description: ""
        })

        setError("")
    }

    return(
        <div className="add-project-container">

            <h1 className="add-project-title">
                Add Project
            </h1>

            <form onSubmit={handleSubmit} className="project-form">

                <div className="form-group">

                    <label>Title</label>

                    <input
                        className="project-input"
                        placeholder="Project Title"
                        value={project.title}
                        onChange={e => update("title", e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                </div>

                <div className="form-group">

                    <label>Description</label>

                    <textarea
                        className="project-textarea"
                        placeholder="Project Description"
                        value={project.description}
                        onChange={e => update("description", e.target.value)}
                    />

                </div>

                <button type="submit" className="add-btn">
                    Add Project
                </button>

            </form>

        </div>
    )
}

export default AddProject;