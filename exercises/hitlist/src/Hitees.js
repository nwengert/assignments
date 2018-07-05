import React from 'react';

function Hitees(props){
    const myHits = props.info.map(hit => {
        return <div key={hit.name}>
                    <h1>{hit.name}</h1>
                    <h3>{hit.image}</h3>
                </div>
    })
    return(
        <div>
            {myHits}
        </div>
    )
}
export default Hitees