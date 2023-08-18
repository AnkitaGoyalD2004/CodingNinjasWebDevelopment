// this keyword refer to an object

function vehicle() {
    console.log(this);
}
new vehicle;

// --> new Keyword
//The ‘new’ keyword creates a new instance of an object from a function. 
//The variables defined inside the function (using this.varName) are properties of the object.
//This object becomes the value of ‘this’ inside the function’s execution context. 
//But primarily, the ‘new’ keyword is used to create a new instance of an object from a function (called a constructor function).

// when we call a function with new keyword it does 4 steps
// 1. it creates a new objects{}
// 2. we link this new object to the prototype of vehicle
// vehicle function with this keyword calls the empty object


//Example
function vehicle(name) { // it creates a new object 
    this.name = name; // we link the new objects to the prototype 
    console.log(this);// vehicle--> this --> (name)
}
new vehicle('car');

// output for this example is



//another example
function Student(name) {
    this.name = name;
    console.log(this);
}
var student1 = new Student("Raj");
console.log(student1.name);

//The ‘new’ keyword creates a new object. 
//The value of ‘this’ inside Student() becomes this newly created object. 
//When Student() is called, it sets this.name equal to Raj. 
