




const stringifyURL = (url, query) => {
    // {color: black, species: howler}
    if(Object.keys(query).length === 0) return url;
    let queryString = "?";
    for (key in query){
        queryString += `${key}=${query[key]}&`
    }
    queryString = queryString.slice(0, queryString.length -1);
    return url + queryString;
    
}

//http://localhost:8080/monkeys?color=black&species=howler
const objectizzexify = url => {
    //pick apart the query parameters into key value pairs of an object
    const queryString = url.substring(url.indexOf("?") + 1);
    //color=black&species=howler
    const splitQuery = queryString.split("&");
    //["color=black", "species=howler"]
    const splitByEqual = splitQuery.map(str => str.split("="));
    // [["color", "black"], ["species", "howler"]]
    const queryObject = splitByEqual.reduce((query, subArr)=> {
        query[subArr[0]] = subArr[1];
        return query;
    }, {})
    return queryObject;






                            //this is the crap that i did
                    // let query = {
                    //     color: "",
                    //     species: ""
                    // };
                    // query.color = url.splice(url.find('color='), url.find('&'));
                    // query.species = url.splice(url.find('species='), url.length);
                    // return query;
}


//how to export multiple things
//how to export two functions at once
module.export = { stringifyURL, objectizzexify };
