 import React from "react";  //this is what I had forgotten to do

 import Header from "./Header.js";
 import Content from "./Content.js";
 import Footer from "./Footer.js";

 function App() {

    // handleClick () => {
    //     console.log('hello');
    // }
    
    return (
        <div>
            <Header />
            <Content />
            <Footer />
            {/* <button onClick={handleClick}>Click Me</button> */}
        </div>
    )
 }

 export default App;