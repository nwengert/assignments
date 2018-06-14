//HIGHER ORDER FUNCTIONS

    //it's just a function that meets at least one of the following criteria:
        //1. It takes a another function as an argument
        //2. It returns another function


// this is a special aspect of JS, some other languages kindof do it though

                    function hof(callback) {
                        callback();
                    }
                    function callback() {
                        console.log("Holla back gurrrrl");
                    }
                    hof(callback); // returns "Holla back gurrrl"

                        // so why can't we do this --- 
                            // hof(callback());
                        //you have to take into account the order of the callstack
                        // the callback function is UNDEFINED, so when that goes into hof, it's undefined
                            //so as long as you take out those parentheses, it'll work. 

                        //this didn't work      // function hof(callback) {
                                                //     // this returns whatever callback returns
                                                //     return callback(anotherCallback);
                                                // }
                                                // function callback(anotherCallback) {
                                                //     return anotherCallback();
                                                // }
                                                // function anotherCallback() {
                                                //     return "You found me!";
                                                // }
                                                // hof(callback); // returns "Holla back gurrrl"

        //what happens if we return another function

        function higherOrderFunction() {
            var func = function () {
                console.log("test");
            }
            return func;
        }
        higherOrderFunction()();  //to acces func by calling higherOrderFunction, you need a seond pair of paren
                                //this is because higherOrderFunction() = func
                                // so func() = higherOrderfunction()()

        function hhof () {
            var funcc = function() {
                var funkalypse = function (){
                    console.log("WTF");
                }
                return funkalypse;
            }
            return funcc;
        }
        hhof()()();   //dug deeper


        
        


                        