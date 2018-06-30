import React from "react";

function Pet (props) {
    //render friend info
    //map through pets and create <Pet /> components
      //map through friends and create <Friend /> instances          
      return (
        <div>
          <h4>Pet Name: {props.pet.name}</h4>
          <p>Breed: {props.pet.breed}</p>
        </div>
      )
}

export default Pet;