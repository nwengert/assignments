import React from 'react'

function Component(props) {
    // this is the parent component
    return (
    <div>
      <Component 
        BackgroundColor='darkgray'
        Title='this is the Title'
        Subtitle='this a Subtitle'
        Information='and information'/>
    </div>
    )
}

export default Component