// i can write promise in another way also
Promise.resolve('Resolved').then(data => console.log(data));

async function asynctask(){
    return "Resolved"; 
} 
//This will actually return Promise
asynctask().then(data => console.log(data));

//await
function getData(){
    return Promise.resolve('some data');
}
async function abc(){
    const data = await getData();
    console.log(data);
}
// whenever abc function is called 
// inside this getdata will be called and we get Promise