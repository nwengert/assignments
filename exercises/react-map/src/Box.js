import React from "react";

//we're going to do some of the exercise from two days ago
function Box (props) {
    //how to give each box its own styling
    const divStyles = {backgroundColor: props.backgroundColor};
    return (
        <div className = "box" style={divStyles}></div>
    )
}

export default Box;