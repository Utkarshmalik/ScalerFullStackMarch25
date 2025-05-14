import { ADMIN_ROLE, EDITOR_ROLE } from "./constants.js";


const user = {
    [ADMIN_ROLE]:true,
    [EDITOR_ROLE]:false
    
}

console.log(user[ADMIN_ROLE]);
console.log(user[EDITOR_ROLE]);



user['admin']  = false;
// console.log(user[ADMIN_ROLE]);


for(let key in user){
    console.log(key);
}

console.log(user);
console.log(Object.keys(user));