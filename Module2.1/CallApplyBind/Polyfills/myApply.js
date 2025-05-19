
Function.prototype.customApply = function(obj, args){

    let functionToInvoke = this;

    obj.functionToInvoke = functionToInvoke;

    obj.functionToInvoke(...args);

    delete obj.functionToInvoke;
}


const parent = {
    health:50,
    addHealth: function (num1,num2){
        this.health+= num1+num2;
    }
}

const child = {
    health:70
}


parent.addHealth.customApply(child,[50,70]);

console.log(child.health);