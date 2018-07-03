import React from 'react';

const App = props => {
    let chosenPhrase;
    switch(props.phrase){
        case 'greeting':
            return chosenPhrase = <h1>Hola</h1>
        default: return null
    }
    
    return(
        <div>
            {
                chosenPhrase
            }
        </div>
    )
}

export default App
