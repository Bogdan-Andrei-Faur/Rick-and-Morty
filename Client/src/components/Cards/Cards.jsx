import React from 'react';
import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (
      <div className={style.pos}>{characters.map(({ id, name, status, species, gender, origin, image}) => {
         return <Card
                  key={id}
                  id={id}
                  onClose={onClose}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
               />
      })}</div>
   );
}
