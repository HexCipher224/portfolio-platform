import {useState} from "react";

function Searchproject ({newProject}) {
    const [query, setQuery] = useState ("");
    const filtered = newProject.filter (
        (p) => p.title.toLowerCase ().includes(query.toLowerCase) ||  p.descprition.toLowerCase ().includes(query.toLowerCase)
}