//This is after the error handling assignment

// function sum(x, y){  
//     //check data types first and throw error
//     //this is called Type Checking
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw "Inputs must be numbers";
//     }
//     return x + y;
//   }
//   try{
//       sum("x", "y");
//   }
//   catch (err){
//       console.log(err.message);  //throws "Inputs must be numbers"
//   }
//   console.log(sum('x', 2));      // also tells ya "Inputs must be numbers



//   function sum(x, y){  
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw "Inputs must be numbers";
//     }
//     return x + y;
//     }

//     try{
//         sum("1", "2");
//     }
//     catch (err){
//         console.log(err.message);  
//     }
//     console.log(sum('x', 2));    
    
    

// 2a) Given a user object, write a function called login that takes a username 
// and password as parameters. Throw an error if either of them don't match.
//  Otherwise, log to the console a message saying "login successful!"

var user = {username: "Nwengert", password: "245Back"};

function login(username, password) {
    if(user.username === username && user.password === password) {
        console.log("login successful");
    }else{
        throw "Password/Username does not match";
    }
}

try{
    login("Nwennnngert", "245Back");
}
catch(err) {
    console.log(err.message);
}


// I keep getting UNDEFINED, but it's supposed to throw an error message.  
// login("Nwengert", "245Back");


