import React from "react";
import Pet from "./Pet.js";

function Friend (props) {
    //render friend info
    //map through pets and create <Pet /> components
      //map through friends and create <Friend /> instances          
      return (
              <div>
                  <h1>Name: {props.friend.name}</h1>
                  <h3>Age: {props.friend.age}</h3>
                  {props.friend.pets.map((pet) => {   //this was the crux move
                      return <Pet pet = {pet}/>
                  })}
              </div>
      )
}
export default Friend;