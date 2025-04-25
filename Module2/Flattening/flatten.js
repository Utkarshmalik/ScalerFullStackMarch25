// input  -> nested array
// let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// [1,2,3,4,5]

// flateen([6, 7, 8, [9, 10, 11]])

// [6,7,8,9,10,11]


// flateen([9, 10, 11])



// [6, 7, 8, [9, 10, 11]] 

// [6,7,8,9,10,11]

Array.prototype.flat = function(){

    let output = [];
    
    for(let i=0;i<this.length;i++){

        let element = this[i];

        if(Array.isArray(element)){

            let innerFlattenedArr = element.flat();

            output.push(...innerFlattenedArr);

        }else{
            output.push(element);
        }
    }

    return output;

}

let input = [1, 2, 3, [4, 5],10,[1,2,3,4,[4,5,4,[5,6]]],[6, 7, 8, [9, 10, 11]]];

let flateenOutput = input.flat();

console.log(flateenOutput);
