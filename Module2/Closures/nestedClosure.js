var iamINGEC = 200;

function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  
            console.log("Hi GEC", iamINGEC) 
        }
    }
}


var fnNameReturn = getFirstName("John");
console.log(fnNameReturn);

var lnNameRtrn = fnNameReturn("Doe");
console.log(lnNameRtrn);

lnNameRtrn();


