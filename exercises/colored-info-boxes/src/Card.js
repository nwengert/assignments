import React from 'react';

function Card (props) {
    return(
        <div style={{
                    backgroundColor: props.backgroundColor,
                    width: '150px',
                    height: '100px',
                    color: props.fontColor
                }}>
            <h3>Title</h3>
            <h4>Subtitle</h4>
            <p>This is the information</p>
        </div>
    )
}

export default Card