function calc(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}


function memoize(fn) {

    let cache = {};

    return (n)=>{

        if(cache[n]===undefined){
            const result=fn(n);
            cache[n]=result;
            return result;
        }else{
            return cache[n];
        }
    }
}


const effecientCalc = memoize(calc);

console.time(); 
effecientCalc(500000);
console.timeEnd();
console.time(); 
effecientCalc(500000);
console.timeEnd();
