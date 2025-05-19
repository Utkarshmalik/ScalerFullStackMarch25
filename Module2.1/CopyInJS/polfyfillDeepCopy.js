let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve",[1,2,3,5,6], "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};

/**
 * value 
 *   
 * primitive : string, number , boolean ..etc
 *  obj :  
 * arr : 
 * 
 * **/

function superClone (obj){

    let clonedObj={};

    for(let key in obj){

        let value = obj[key];

        if(typeof value === "object"){
            //either an array or an object 

            let innerClonedObj =  superClone(value);
            if(Array.isArray(value)){
                clonedObj[key]  = Object.values(innerClonedObj);
            }else{
                clonedObj[key] = innerClonedObj;
            }

        }else{

            clonedObj[key]=value;
        }

    }




    return clonedObj;



}


let deeplyClonedObj = superClone(person);

console.log(deeplyClonedObj);

// deeplyClonedObj.address.street = "south 1st street";

// console.log(person.address.street);
// console.log(deeplyClonedObj.address.street);
