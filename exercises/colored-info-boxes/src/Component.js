import React from 'react'
// import Avatar from './Avatar'
//this is telling the page how to display the elements of App
function Comment(props) {
    return (
        <div>
            <div>
                <p>{props.user.title}</p>
            </div>
            <div>
                <p>{props.user.subtitle}</p>
            </div>
            <div>
                <p>{props.user.date}</p>
            </div>
        </div>
    )
}

export default Comment