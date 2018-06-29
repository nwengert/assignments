import React from "react";

import Pet from "./Pet.js";
import App from "./App.js";

function Friend (props) {
    //render friend info
    //map through pets and create <Pet /> components
    
      //map through friends and create <Friend /> instances          
      return (
              <div>
                  <h1>Name: {props.friend.name}</h1>
                  <p>Age: {props.friend.age}</p>
                  {props.friend.pets.map((pet) => {
                      return <Pet pet = {pet}/>
                  })}
              </div>
      )
}

export default Friend;
















//this is what it was

// function Friend (props) {
//   //render friend info
//   //map through pets and create <Pet /> components
  
//     //map through friends and create <Friend /> instances          
//     return (
//             <div>
//                 <h1>Name: {props.friend.name}</h1>
//                 <p>Age: {props.friend.age}</p>
//                 {props.friend.map((pet) => {
//                     return <Pet pet = {pet}/>
//                 })}
//             </div>
//     )
// }

// export default Friend;