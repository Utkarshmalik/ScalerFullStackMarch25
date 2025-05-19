
Function.prototype.customBind = function(obj, ...args1){

    const functionToExecute = this;

    return function (...args2){

                //i need to invoke functionToExecute with value of this keyword as obj with args args1 and args2
                functionToExecute.call(obj,...args1,...args2);
    }

   
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


// const addHealthFn = parent.addHealth.bind(child, 10,20);
// addHealthFn();

// const addHealthFn = parent.addHealth.bind(child);
// addHealthFn(10,20);



const addHealthFn = parent.addHealth.customBind(child,10);
addHealthFn(20);




console.log(child.health);