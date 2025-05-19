import { deposit, getBalance, withdraw } from "./account.js"



 export const performTransaction = (type,amount)=>{

    if(type==='deposit'){
      deposit(amount);
      return getBalance();
    }else if(type === "withdraw"){
        withdraw(amount);
        return getBalance();
    }else{
        throw new Error("Invalid transaction type");
    }

}

