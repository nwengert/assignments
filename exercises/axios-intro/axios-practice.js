var axios = require("axios");
//  https://www.npmjs.com/package/axios
        //          npm init -y
        //          npm install -S axios


// GET, POST, PUT, DELETE
var url = "https://api.vschool.io/[nathan_wengert]/todo/";


// GET request

    axios.get(url)
        .then(function(response){   //fx is given response object from the request
            console.log(response.data);
            //do stuff with the request as needed
        })
        .catch(function(err){
            // handle the error as needed
        })




    // // POST 
    // function addTodo(todoItem){
    //     axios.post(url, todoItem)
    //     .then(function(response){
    //         console.log(response.data);
    //     })
    //     .catch(function(err){
    //         console.log(err);
    //     })
    // }

    // addTodo({
    //     title: "Find a place to park my RV",
    //     description: "For a few months"
    // });


    



    // //Delete

    // function deleteTodoById(id){
    //     axios.delete(url + id)
    //         .then(function (response){
    //             console.log(response.data);
    //         })
    //         .catch(function(err){
    //             console.log(err);
    //         })
        
    // }

    // deleteTodoById('5b27f121eec94d291400b529');






    // //PUT
    //         //it's the same as a post request, except that it needs an id
    // function editTodoById(id, editedTodo){
    //     axios.put(url + id, editedTodo)
    //         .then(function (response) {
    //             console.log(response.data);
    //         })
    //         .catch(function (err){
    //             console.log(err);
    //         })
    // }

    // editTodoById("5b27ef95eec94d291400b527",{title: 'read a friken book', description: 'turn them pages'})