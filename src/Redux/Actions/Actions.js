export function addFavorite(objCharacter){
    return {type: "ADDFAVORITE", payload: objCharacter}
}

export function deleteFavorite(id){
    return {type: "DELETEFAVORITE", payload: id}
}