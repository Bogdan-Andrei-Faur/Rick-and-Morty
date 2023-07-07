import React from "react";
import style from "./Error.module.css"
import { Link } from "react-router-dom";

export default function Error(){
    return (
        <div className={style.card}>
            <img className={style.img} src="https://media.vandalsports.com/i/1706x960/6-2023/202361512109_1.jpg.webp" alt=""/>
            <h1 className={style.error}>Error: 404</h1>
            <h1 className={style.error}>Pulsa el "Boton Rojo"</h1>
            <Link to="/home">
                <button className={style.errorButton}></button>
            </Link>
            
        </div>
    )
}