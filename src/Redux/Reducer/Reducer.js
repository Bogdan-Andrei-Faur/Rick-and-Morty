const initialGlobalState = {
    favorites: [],
    characters: [],
    access: false,
}

export default function rootReducer(state = initialGlobalState, action){
    switch(action.type){
        case "ADDFAVORITE":
            return {...state, favorites: [...state.favorites, action.payload]};
        case "DELETEFAVORITE":
            return {...state, favorites: state.favorites.filter(fav => fav.id !== Number(action.payload))};
        default:
            return {...state};
    }
}