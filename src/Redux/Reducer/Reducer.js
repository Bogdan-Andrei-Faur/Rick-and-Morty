const initialState = {
    myFavorites: [],
    characters: [],
    access: false,
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "ADD_FAV":
            return {...state, myFavorites: [...state.myFavorites, action.payload]};
        case "REMOVE_FAV":
            return {...state, myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload))};
        default:
            return {...state};
    }
}