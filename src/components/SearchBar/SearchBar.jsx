import React, { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [id, setId] = useState("");

   function handleChange (evento){
      setId(evento.target.value)
   }

   return (
      <div className={style.card}>
         <input
            className={style.search}
            type="text"
            placeholder="Busca un personaje..."
            onChange={handleChange}
            value={id}
         />
         <button
            className={style.submit}
            onClick={() => {props.onSearch(id)}}
         >Agregar</button>     
      </div>
   );
}
