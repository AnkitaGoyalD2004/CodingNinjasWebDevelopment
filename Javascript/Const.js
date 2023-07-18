// const only use for read only variable
//  if we haven't initialize the value to a variable then it give me undefined
var a = 10;
a = 20;
console.log(a); // here value is updated to 20
// In const we can do as like first initialize and then assign this is incorrect 
// const only use for read only 
const c = 80;
// c = 56;
console.log(c);// here we cannot update the value --> coz we assign c as const

//for of loop
var arr = [1,2,3,4];
for(let i = 0 ; i <=arr.length; i ++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}

