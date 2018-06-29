import React from "react";

function Pet (props) {
    //render friend info
    //map through pets and create <Pet /> components
      //map through friends and create <Friend /> instances          
      return (
        <div>
          <p>Pet Name: {props.pet.name}</p>
          <p>Breed: {props.pet.breed}</p>
        </div>
      )
}

export default Pet;