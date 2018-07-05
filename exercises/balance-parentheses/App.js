//write all the code
// Given a string including parentheses, write a function that returns 
// true if every opening parenthesis has a closing parenthesis.
// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.
// ")()(" // -> false
// "())(" // -> false

const balanceParentheses = (str) => {
const myStr = str.split('');
    if(myStr[0]===')') {return false};
    if(myStr.length % 2) {return false};
    if(myStr[myStr.length] === '('){return false};
    var openP = [];
    var closeP = [];
    for(let i = 0; i < myStr.length; i++){
        if (myStr[i] === '('){
            openP.push(myStr[i]);
        }else if(myStr[i] === ')'){
            closeP.push(myStr[i]);
        }
    }
    return closeP.length === openP.length 
}
module.exports = balanceParentheses; 