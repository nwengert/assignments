//how to write a test

const assert = require("chai").assert;
//import function that is being tested
const { stringifyURL, objectizzexify } = require('../index.js');

const testCasesStringify = [
    {
        url: "http://localhost:8080/monkeys",
        query: {
            color: "black",
            species: "howler"
        },
        url: "http://localhost:8080/monkeys",
        query: {}
    }
]

describe("Test stringify", ()=>{
    it('Should return a url string with the parameters added at the end separated by & signs', ()=> {
        assert.equal(stringifyURL(testCasesStringify[0].url, testCasesStringify[0].query), 
        "http://localhost:8080/monkeys?color=black&species=howler")
    })
});
    it('Should return a url string with no query added', ()=> {
        assert.equal(stringifyURL(testCasesStringify[1].url, testCasesStringify[1].query), 
        "http://localhost:8080/monkeys")
});


const testCasesObject = [
    "http://localhost:8080/monkeys?color=black&species=howler",
    "http://localhost:8080/monkeys"
]

describe("Test objectizzexify", ()=>{
    it("should return a query object with a couple key value pairs", () =>{
        assert.deepEqual(objectizzexify(testCasesObject[0]), {
            color: "black",
            species: "howler"
        });
    });
    it("should return empty query object", () => {
        assert.deepEqual(objectizzexify(testCasesObject[1]), {});
    })
});