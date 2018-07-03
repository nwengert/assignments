// one param
const oneParam = param => {

}
//more than one
const manyParam = (a, b) => {

}
//return keyword
const singleLine = (a, b) => a + b;
const singleObject = (a, b) => ({
    key: 'value',
    foo: 'bar'
})                               // w/o paren it would think that it was a fx block


const multLine = (a, b) => {
    const firstLine = 'foo';
    const secLine = 'bar';
    return firstLine + secLine;
}


// the real advantage of arrow functions
    //   they do not create a new 'this' context

