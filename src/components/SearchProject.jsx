import {useState} from "react";

function SearchProject ({newProject}) {
    const [query, setQuery] = useState ("");
    const filtered = newProject.filter(
        (p) => p.title.toLowerCase ().includes(query.toLowerCase()) ||  p.description.toLowerCase ().includes(query.toLowerCase())
    )
    return(
        <div>
            <input placeholder="search" value={query} onChange={e => setQuery(e.target.value)}/>
        
        {
            newProject.length > 0 && (<p>{filtered.length} of {newProject.length}projects
            {newProject.length !==1 ? "S": ""}
            {query && ` matching " ${query} " `}
            </p>
            )}
            {newProject.length === 0 ? (
                <p>No projects yet.Add one above</p>
            ):filtered.length === 0 && query ? (
                <p>No project match "{query}"</p>
            )
            
            :(<ul>
                {filtered.map(project => (<li key={project.id}>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                </li>))}
            </ul>)}
        </div>
        
    )
}
export default SearchProject;