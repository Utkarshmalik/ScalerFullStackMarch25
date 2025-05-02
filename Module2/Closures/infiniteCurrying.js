
function counter(args){

    let count=0;
    count++;

    if(args==0){
        return count;
    }


    return function inner(args){

        count++;

        if(args === 0){
            return count;
        }else{
          return inner;    
        }

    }

}



console.log(counter(0)); // Output :  1
console.log(counter()(0)); // Output : 2
console.log(counter()()(0)); // Output : 3 
console.log(counter()()()(0)); // Output : 4
console.log(counter()()()()()()()(0)); // Output : 8
