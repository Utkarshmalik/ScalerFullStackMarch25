


var balance = 1000;


export const deposit = (amount)=>{
    balance+=amount;
}

export const withdraw = (amount)=>{

    if(balance>=amount){
    balance-=amount;
    }else{
        throw new Error("Insufficient Balance");
    }
}

export const getBalance = ()=>{
    return balance;
}


