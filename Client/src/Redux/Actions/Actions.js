import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/favorites';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/favorites/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export function filterCards(gender){
    return {type: "FILTER", payload: gender}
}

export function orderCards(order){
    return {type: "ORDER", payload: order}
}

export function todos(){
    return {type: "Todos"}
}