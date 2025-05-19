function createEvenStack() {
    var items = [];
    return {
        push(item) {
            if (item % 2 == 0) {
                console.log("Is pushed");
                items.push(item);
            }
            else {
                console.log("Please input even value");
            }
        },
        pop() {
            return items.pop();
        }
    }; 
}


const stack = createEvenStack();
stack.push(10);
stack.push(5);
console.log(stack.items);