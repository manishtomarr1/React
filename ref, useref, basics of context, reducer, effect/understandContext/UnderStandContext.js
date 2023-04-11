import React, {useContext} from "react";
import NoteContext from "../context/notes/noteContext";

const UnderstandContext = () =>{
const a = useContext(NoteContext)
    return (
        <div>
        How are you {a.name}
        </div>
    )
}

export default UnderstandContext;