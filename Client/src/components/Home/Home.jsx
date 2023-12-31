import React from "react";
import Cards from "../Cards/Cards";

export default function Home({characters, onClose}){
    return(
        <div>
            <Cards characters={characters} onClose={onClose}/>
        </div>
    )
}