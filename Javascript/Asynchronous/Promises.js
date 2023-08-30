var promise = new Promise((resolve , reject) => {
    resolve("YAY Promise is fulfilled");
});
console.log(promise); // in this we get an output of fulfilled


var promise = new Promise((resolve , reject) => {
    reject("Something went wrong");
});
console.log(promise); // in this we get an output of rejected



var promise = new Promise((resolve , reject) => {
    setTimeOut(() => {
        resolve({message : 'Success'});
    } , 3000);
});

promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('error' , error);
});

// we use call back to complete some sort of routine or we can say sequence of action
function greet(name , callback){
    console.log('hi ${name}');
    callback();
}
function askQuestion(){
    console.log('How Are You ?');
}
greet('Abhay' , askQuestion);
