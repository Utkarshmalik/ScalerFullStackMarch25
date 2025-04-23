let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(this);
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}

// cap.petersTeam("Utkarsh","Vinay");

let ironMan = {
    name: "Tony", 
    team: "iron man"
}



// cap.petersTeam.call(ironMan,"Rahul","Jay");


let anotherFn = cap.petersTeam.bind(ironMan,"Rahul","Jay");
anotherFn();







//cap.petersTeam.apply(ironMan,["Rahul","Jay"]);









//fn.call(obj,arg1,arg2,arg3);

// fn.apply(obj,[arg1,arg2,arg3]);
