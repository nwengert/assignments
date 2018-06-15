// There are going to be errors that are just kindof unavoidable
// but we don't want them to break our webside/ program
//TRY and CATCH


try {
    console.log('derp');

    console.lg('derp a doo');

    console.log('just derping away');
}
catch(err){
    console.log(err);
}
console.log('just derping away\n\n');

//This is how you can test code.  Like quarantiing portions

// finally{
//     //this exists, but there's really not much of a reason to use it
// }

//There are tons of libraries under the hood that use this
//we might not use it a whole whole lot in our own code

//   google  --   mdn list of errors

// try{
//     console.log(x+y);
// }
// catch(err){
//     console.log(err);  // ReferenceError: x is not defined
// }

// an error is nothing fancy, it's just an object

try{
    x + y;
}
catch(err){
    console.log(err.message);  
}
// There is some info that you can as the errors for
