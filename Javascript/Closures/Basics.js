var var1 = 10; // this is defined in the global scope
function outer(){
    var b = 40; // scope variable
    console.log(b);
    // if we are decalre the variable inside the function we cannot access or print outside the function


    // global context actually related with the Lexical Environment--> so basically it stores the this keyword and the global variables
}

console.log(var1);
console.log(window.var1); 
// we can print var1 in both ways

window.outer();
