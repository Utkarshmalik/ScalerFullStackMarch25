function outerFunction() {
    var count = 0;
    var x=5;
    
    function innerFunction() {
        count++;
        return count
    }
    return innerFunction
}

var innerFunc = outerFunction();
console.log(innerFunc())
console.log(innerFunc())