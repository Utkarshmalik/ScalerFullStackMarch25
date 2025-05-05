console.log("Before");

const cb2 = () => {
        console.log("Set timeout 1");
        while(1){

        }
}

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");