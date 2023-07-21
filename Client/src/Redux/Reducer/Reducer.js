const initialState = {
    myFavorites: [],
    allCharacters: [],
    access: false,
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            
        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload };

        case "FILTER":
            return {...state, myFavorites: state.allCharacters.filter((pj) => pj.gender === action.payload)}
        
        case "ORDER":
            let copy = state.myFavorites.sort((a, b) => {
                if (action.payload === "A"){
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                } else {
                    if (a.id > b.id) return -1;
                    if (a.id < b.id) return 1;
                    return 0;
                }
            })
            return {...state, myFavorites: copy}

        case "Todos":
            return {...state, myFavorites: state.allCharacters}

        default:
            return {...state};
    }
}