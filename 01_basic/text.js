console.log("harsh ")

//*************variable declaration****************

// let data can be changed or override but we cannot redeclared
let x=0
// let x=1    we can not do this not redeclared        
x=1
console.log(x);

// var data can be changed or override that why it's not recomndeted due to datalose
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:
var y=0
var y=1
console.log(y);

//Redeclaring a variable inside a block will not redeclare the variable outside the block:
/* we can do this 
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
*/

//With let, redeclaring a variable in the same block is NOT allowed:
/*var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
*/