import React from "react";
import style from "./About.module.css"
export default function About(){
    return (
        <div className={style.card}>
            <img className={style.img} src="https://rickandmortyapi.com/api/character/avatar/61.jpeg" alt="" />
            <h1 className={style.info}>Name: Andrei Faur</h1>
            <h1 className={style.info}>Status: Alive</h1>
            <h1 className={style.info}>Species: Human</h1>
            <h1 className={style.info}>Gender: Male</h1>
            <h1 className={style.info}>Origin: Earth</h1>
      </div>
    )
}