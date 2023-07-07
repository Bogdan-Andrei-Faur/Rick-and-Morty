import React, {useEffect, useState} from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFavorite, deleteFavorite} from "../../Redux/Actions/Actions"
import { connect } from "react-redux";

function Card({onClose, id, name, status, species, gender, origin, image, favorites}) {
   const [isFav, setFavs] = useState(false);

   const handleFavorite = function(){
      isFav ? deleteFavorite(id) : addFavorite({id, name, status, species, gender, origin, image, onClose});
      setFavs(!isFav);
   }

   useEffect((id) => {
      favorites.forEach((fav) => {
         if (fav.id === id){
            setFavs(true);
         }
      });
   }, [favorites]);

   return (
      <div className={style.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <Link to={`/detail/${id}`}>
            <img className={style.image} src={image} alt={name} />
         </Link>
         
         <button className={style.close} onClick={() => onClose(id)}>X</button>
         <h3 className={style.name}>{name}</h3>
         <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         <h2 className={style.info}>{origin}</h2>
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFavorite: (objCharacter) => dispatch(addFavorite(objCharacter)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

function mapStateToProps(state){
   return {
      favorites: state.favorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)