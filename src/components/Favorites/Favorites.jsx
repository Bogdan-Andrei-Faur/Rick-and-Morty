import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({myFavorites}){
    return (
        <div>
            {
                myFavorites.map(({id, name, status, species, gender, origin, image}) => {
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