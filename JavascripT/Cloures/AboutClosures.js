// It is basically a concept where the inner function preserves the scope chain of a outer function
var i = 10;
function outer(){
    var j = 20;
    var inner = function()     
    {
        var k =30;
        console.log(j,k);
    }
    return inner;
}
var inner = outer();
inner();


for(var i =1; i<=5 ; i++){
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// this piece of code give me 6 --> 5 times 
// but if we are using let i =1 instead of var then it will print 1 2 3 4 5 


// Arrow Function
var multiply = (x,y) =>  {return x*y};
console.log(multiply(5,6));

// more on arrow function
function Person(name){
    this.name = name;
    console.log(this);
    /* setTimeout(function(){
        console.log(this);
    }, 1000); */
    setTimeOut (() => console.log(this) , 1000);
}
var p = new Person("Abhay");

console.log((function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1));