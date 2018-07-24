import React from 'react'
import axios from 'axios';

function App (){
    axios.get('http://lovalhost:8080/bounties').then(response => console.log(response.data))
    return(
        <div>
            test
        </div>
    )
}
export default App
