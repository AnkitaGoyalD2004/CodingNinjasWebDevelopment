/*function Vehicle(numWheels , price){
    this.numWheels = numWheels;
    this.price = price;
    this.getPrice = function(){
        return this.price;
    }
}
Vehicle.prototype.getPrice = function(){
    return this.price;
}*/

class Vehicle {
    constructor(numWheels , price){ // this will create internally 
        this.numWheels = numWheels;
    this.price = price;
    }
    getprice =()=>{  // this is an arrow function through which we can use this as a prototype
        return this.price;
    }
}

var vehicle1 = new Vehicle(2,50000);
var vehicle2 = new Vehicle(4,50000);
// we cannot call a class without new keyword