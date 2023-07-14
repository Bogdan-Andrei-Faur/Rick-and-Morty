import React, {useState, useEffect} from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../Redux/Actions/Actions"
import { connect } from "react-redux";

function Card({onClose, id, name, status, species, gender, origin, image, myFavorites, removeFav, addFav}) {
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [myFavorites]);

   return (
      <div className={style.card}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}

         <Link to={`/detail/${id}`}>
            <img className={style.image} src={image} alt={name} />
         </Link>
         
         {onClose ? (
            <button className={style.close} onClick={() => onClose(id)}>X</button>
         ) : null}
         
         <h3 className={style.name}>{name}</h3>
         <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         <h2 className={style.info}>{origin}</h2>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);