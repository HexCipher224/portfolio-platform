import {useState} from "react";

function AddProject ({addProject}) {
    const[project, setProject] = useState({title: "", description: ""})
    const[error, setError] = useState("")
    const update = (field, value) => setProject (
        {...project, [field]: value}
    )
    function handleSubmit (event) {
        event.preventDefault()
        if (!project.title.trim()){
            setError("project title required")
            return
        }
    addProject ({title: project.title, description: project.description})
    setProject ({title: "", description: ""})
    setError ("")
    }

    return(
        <div>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input placeholder="Project Title" value={project.Title} onChange={e => update("title", e.target.value)}/>
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <label>Description</label>
                    <input placeholder="Project Description" value={project.description} onChange={e => update("description", e.target.value)}/>
                </div>
                <button type="submit">Add Project</button>
            </form>
        </div>

    )
}

export default AddProject;



