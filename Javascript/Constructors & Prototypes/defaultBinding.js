function ask(){
    console.log(this , this.name);
}
ask(); //global context

// all Bindings

var person = {
    name : 'john',
    ask : function(){
        console.log(this);
    }
}
new(person.ask.bind(person))();