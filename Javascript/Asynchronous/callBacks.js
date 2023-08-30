console.log(1);

setTimeOut (function (){
    console.log(2);
} , 1000);
//setTimeOut is not a part of javascript

console.log(3);
// if we set time to 0 then also it will comes after 3

var Promise = new Promise(function(resolve,reject){
    resolve(1);
})
Promise.then(function(data){
    console.log(data);
});


