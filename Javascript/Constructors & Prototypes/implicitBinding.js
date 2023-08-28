var raj = {
    name: 'Raj',
    greet :function(){
        console.log('Hello' , this);
    }
};
raj.greet()
var localAskFunc = raj.greet;