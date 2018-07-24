import React from 'react';


//monday  23 july - I'm at the point where I got the array logged to console, but can't get that to render onto the page.  Do I create a redux folder and pull that stuff into redux and then down into the this Content file?  

function Content (props) {
    return(
        <div>
            <form action="">
                <input placeholder="First Name" type="text"/>
                <input placeholder="Last Name" type="text"/>
                <input placeholder="Living?" type="boolean"/>
                <input placeholder="Bounty Amount" type="number"/>
                <input placeholder="Type" type="text"/>
                <button>Add</button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default Content