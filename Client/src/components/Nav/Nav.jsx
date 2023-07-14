import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav ({onSearch, logOut}){
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch} logOut={logOut}/>

            <Link to="/home">
                <button className={style.home}>Home</button>
            </Link>

            <Link to="/about">
                <button className={style.about}>About</button>
            </Link>

            <Link to="/favorites">
                <button className={style.favorites}>Favorites</button>
            </Link>

            <button className={style.logOut} onClick={logOut}>Log Out</button>   
        </div>
    )
}