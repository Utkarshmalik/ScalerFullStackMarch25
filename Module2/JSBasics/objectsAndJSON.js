

let cap = {
    name:"Steve",
    "last name" :"Rogers",
    isAvenger:true,
    address: {
        city:"New Delhi",
        country:"India"
    },
    saHi:function(){
        console.log("Cap Says Hii");
    },
    movies:["Avenger","Civile War"]

}

console.log(cap);
console.log(cap.name);
console.log(cap.isAvenger);
console.log(cap.address);
cap.saHi();
console.log(cap.movies);
console.log(cap.address.city);
console.log(cap['last name']);

let x = "isAvenger";

console.log(cap.x);
console.log(cap[x]);

for(let key in cap){
    console.log(key,' ',cap[key]);
}






const dataToServer = JSON.stringify(cap);

console.log(dataToServer);



const dataFromServer = dataToServer;


const serverResponseJS = JSON.parse(dataFromServer);

console.log(serverResponseJS);


