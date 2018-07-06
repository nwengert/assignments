import React from 'react';

function Hitees(props){
    const myHits = props.info.map(hit => {
        return <div className='hiteeDivs' key={hit.name}>
                    <img className='hiteePics' src={hit.image} alt=""/>
                    <h1>{hit.name}</h1>
                </div>
    })
    return(
        <div>
            {myHits}
        </div>
    )
}
export default Hitees