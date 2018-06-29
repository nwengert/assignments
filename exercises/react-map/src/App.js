import React from "react";

import Box from "./Box";


// function App(){
//     return (
//         <div>
//             <Box backgroundColor="green"/>
//             <Box backgroundColor="lightgray"/>
//             <Box backgroundColor="purple"/>
//             <Box backgroundColor="yellow"/>          but this is a lot of repeated code.  So use MAP
//             <Box backgroundColor="red"/>
//             <Box backgroundColor="blue"/>
//             <Box backgroundColor="green"/>
//         </div>
//     )
// }

//Map is used for converting raw data in the form of an array (of anyting) into react elements OR components --which resolve into react elements. 
//We need to provide a 'key' prop to the parent element for the callback for performance reasons. 
//What's the benefit of Map?    
//          b/c we'll be getting raw data from servers all day long, we have to be able to handle it dynamically
//          it allows us to reuse components in a quick way, w/o having to rewrite it. 
//          it's great for rendering lists of things




function App(){
    const backgroundColors = ["green", "red", "blue", "lightgray", "magenta", "pink"];
    const boxes = backgroundColors.map((color, index) => <Box key={color + index} backgroundColor = {color} />)
    //we set up a key to equal the index of the map method, and included the color to make it very unique

    return (
        <div>
            {boxes}
        </div>
    )
}

export default App;