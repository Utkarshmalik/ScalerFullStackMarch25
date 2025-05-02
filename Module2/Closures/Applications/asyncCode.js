var a = 100;

console.log("Before");

function cb() {
    console.log("I will explode",a);
}

setTimeout(cb, 2000);

console.log("After");