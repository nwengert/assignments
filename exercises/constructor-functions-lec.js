// Constructor functions are functions
// They produce objets, which is called INSTANTIATION
// Keywords: 'new', 'this'
// syntax: capitalizewd function names

// JS is a prototypical inherited language
// Object-Oriented: once something gets made, it has all the methods and properties it ever will
//      It's like a factory that makes widgets, the widgets are made with every function they'll ever have
//       Then the blueprints of the factory changes, and the new widgets have differente properties that the previous
// How JavaScript instantiates:
// A happy factory has a blueprint to make(instantiate) widgets
// What's cool about JS, is that once something is instantiated, it always looks back to the blueprint. 
//      Example of prototypes in action:
//          Every data type has its own constructor, denoted by the capitol letter.
//          But suppose we wanted to add some method to a string
//          Strings already have a bunch of methods, like .split, .indexOf, .lastIndexOf, 
//          Something like "text".test would throw an error because it's not an inherit property
//  We can add properties and methods to data types, using their prototype.. this can't be done in other languages
//  Then their widgets will inherit those changes
                String.prototype.rawr = function() {
                    console.log("MAAAAWWWWRRRR!!!!!!!");
                }
                "adkneo".rawr();

//Proper like from VBA!
                String.prototype.proper = function () {
                    var first = this[0].toUpperCase();
                    var rest = this.slice(1);
                    return first +  rest;
                }
                console.log("test".proper());
                console.log("nathan".proper());

//  We can make out own constructor functions that do whatever we want them to. And assign them their own prototypes!
//  When defining a constructor, you can do it two ways, excluding ES6 stuff
                // function IkeaFurniture () {    //That capitol I denotes that it is a constructor function

                // }
                // var IkeaFurniture = function () {  //This is the other way.  

                // }
            // That capitol letter just tells the readers of your code that this is a constructor function

//DEFINING A CONSTRUCTOR
                var IkeaFurniture = function(type, name) {
                    this.type = type;
                    this.name = name;
                }
                var sofa = new IkeaFurniture("sofa", "futon");
                console.log(sofa);


                IkeaFurniture.prototype.setPrice = function(price) {
                    this.price = price;
                }
                sofa.setPrice(100);
                console.log(sofa);

// The purpose of a constructor is to make  lot of objects that will be of the same template
// Prototype is not a built in method, it's a property that happens to also be an object.  
        // It's a prototype on the constructor function, 
        // which is an object that gives all of their instances shared properties and methods

// Suppose you want to know who constructed the sofa

                console.log(sofa.constructor);


/////////  RECAP  \\\\\\\\

//  Constructors are funtions which generate objects
//  This is called instantiation
//  They are denoted with a Capital Letter
//  Properties of objects are given with the keyword 'this'
//  Methods of objects are given via the prototype object
//     .prototype is only used on the constructor to make a new method
//  Separate your methods from your static properties

//  We can now dynamically creat objects, takes out the tediousness of having to write them out all the time.  
                function Person(name, age, birthday) {
                    this.name = name;
                    this.age = age;
                    this.birthday = birthday;
                }

                Person.prototype.warCry = function (warCry) {
                    console.log("warCry");
                }

                var maxx = new Person("Maxx", 27, "April 18");
                maxx.warCry("THIS IS SALLLT LAAAAKKEEE");
                console.log(maxx);
                //I couldn't get maxx's warCry to log




                var Animal = function() {
                    this.hasCellWall = false;
                }
                
                var Mammal = function() {
                    Animal.call(this);     //
                    this.hasFur = true;
                }
                //Functions are instances of the MOTHER FUNCTION
                
                var dog = new Mammal();
                console.log(dog.hasCellWall);  //logs False because dog is a Mammal!

                // you can create an object in mammal to be like a prototype in Animal
                // Mammal.prototype = Object.create(Animal.prototype);

                //It may take awhile to get a handle on Prototypical Inheritance
                                                            // what it is, how it works
                                                            // what makes it different from other languages
                                                            // Having a handle on it will make you a better candidate. 
                                                            
                    // slacked 11:03 am June 12 students-js-may

