
var varName = 10;


function b() {
    console.log("in b",varName);
}


function fn(){

    var varName = 20;
    
    b();

    console.log(varName);
}

fn();



// A lexical scope allows a function scope to access variables in the outer scope. 
// The outer scope is deteremined wrt to function definition only were we have defined the function code in js file .
