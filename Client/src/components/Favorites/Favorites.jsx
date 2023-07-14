import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, todos } from "../../Redux/Actions/Actions";

function Favorites(){
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [booleano, setBooleano] = useState(false);

    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setBooleano(!booleano)
    }

    function handleFilter(event){
        if (event.target.value === "Todos"){
            dispatch(todos())
        } else {
            dispatch(filterCards(event.target.value))
        }
        
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            {
                myFavorites?.map(({id, name, status, species, gender, origin, image}) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = function(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);