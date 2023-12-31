import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios(`http://localhost:3001/character/${id}`).then((response) => {
           if (response.data.name) {
              setCharacter(response.data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.card}>
            <img className={style.img} src={character.image} alt="" />
            <h1 className={style.info}>Name: {character.name && character.name}</h1>
            <h1 className={style.info}>Status: {character.status}</h1>
            <h1 className={style.info}>Species: {character.species && character.species}</h1>
            <h1 className={style.info}>Gender: {character.gender && character.gender}</h1>
            <h1 className={style.info}>Origin: {character.origin && character.origin}</h1>
        </div>
    )
}