import React from "react";
import style from "./Form.module.css"
import { useState } from "react";
import Validation from "../Validation/Validation"

export default function Form({login}){
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErorrs] = useState({});

    const handleChange = function(event){
        setErorrs(Validation({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    };

    const handleSubmit = function(event){
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={style.div}>
            <form className={style.form}>
                <h1 className={style.titulo}>Rick and Morty</h1>
                <br />
                <label className={style.emailText} htmlFor="email">Email</label>
                <br />
                <input
                    className={style.email}
                    onChange={handleChange}
                    value={userData.email}
                    type="text"
                    name="email"
                />
                {errors.e1 ? (<p className={style.error}>{errors.e1}</p>)
                :errors.e2 ? (<p className={style.error}>{errors.e2}</p>)
                :            (<p className={style.error}>{errors.e3}</p>)
                }
                <br />
                <label className={style.passwordText} htmlFor="password">Password</label>
                <br />
                <input
                    className={style.password}
                    onChange={handleChange}
                    value={userData.password}
                    type="password"
                    name="password"
                />
                {errors.p1 ? (<p className={style.error}>{errors.p1}</p>)
                :errors.p2 ? (<p className={style.error}>{errors.p2}</p>)
                :            (<p className={style.error}>{errors.p3}</p>)
                }
                <br />
                <div className={style.buttonPosition}>
                    <button className={style.button} onClick={handleSubmit} type="submit">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    )
}