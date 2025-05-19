
Function.prototype.myCall = function(obj, ...args){

    let functionToInvoke = this;

    obj.functionToInvoke = functionToInvoke;

    obj.functionToInvoke(...args);

    delete obj.functionToInvoke;
}


let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}


let ironMan = {
    name: "Tony", 
    team: "iron man"
}


console.log(ironMan);


cap.petersTeam.myCall(ironMan,"Rahul","Jay");



//fn.call(obj,arg1,arg2,arg3);



