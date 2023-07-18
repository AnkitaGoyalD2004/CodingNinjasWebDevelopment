var a = 10;
if(a<=10){
     var b = 40; 
    //   Instead of var if m taking let then b only works for this block
    // let b = 40;
}else{
    var c = 50;
}

console.log(a,b,c);

//Let
//It can be declared without initialization.
//It can’t be accessed without initialization, as it returns an error
//It can be updated but cannot be re-declared into the scope.

//const
//It can’t be declared without initialization. e.g. const val; It is not allowed.
//const can’t be accessed without initialisation, as it can’t be declared without initialisation.
//It cannot be updated or re-declared into the scope.

for(var i = 1 ;i <= 5 ; i++){
    setTimeout(function(){
        console.log(i); 
    } , 1000);
}

//mcq
function oddSum(n)
{
    let total = 0, result=[]; 
    for(let x = 1; x <= n; x++) 
    { 
       let odd = 2*x-1; 
       total += odd;
       result.push(total);
    }
    return result;
}

var result = oddSum(5);
console.log(result);
