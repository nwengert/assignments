var rs = require("readline-sync");

var x = rs.question("\nPick a positive integer.  ");
var y = rs. question('\nPick aonther positive intever.  ');

var operators = ["+", "-", "/", "*"];

function add(x,y) {
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function calculate(operation, x, y) {               //Whats nice is that this can take any two numbers
    return operation(x,y);
}

var operatorIndex = rs.keyInSelect(operators, "\nWhat operation would you like to perform?");

function display(operatorIndex){
    switch(operators[operatorIndex]) {
        case "+": return calculate(add, x, y);
        case "-": return calculate(subtract, x, y);         //you could just not put calculate, but we're looking at HOFs
    }
}
