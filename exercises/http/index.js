// by 2003 they introduced the idea of an http request, to preserve the part of the 
// page that isn't changing, and alter the part that you do wan to change. 

// Asyncronous Javascript 

// AJAX
        // it somehow exists outside of the normal sync of code
        // js is a single threaded language,  it can only do one thing at a time. 

        //EVENT LOOP - can execute code on command
        // callback queue

    // we'll use a library to abstract a lot of the complicated stuff

// how to make a request
    //it's a constructor function that will give us an object
var xhr = new XMLHttpRequest();
//we have to tell it what to do.  location, html req, and data type
xhr.onreadystatechange = function(){
    //readysttechange is every time the point of contact btwn server and client changes
    if(xhr.readyState === 4 && xhr.status === 200){
        //they sent us back a JSON file in form of responsetext
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        var h1 = document.createElement("h1");
        h1.innerHTML = jsData.title;
        var body = document.querySelector("body");
        body.appendChild(h1);
    }
}

xhr.open("GET", "https://api.vschool.io/ben/todo", true);
xhr.send();