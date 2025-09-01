


function calculateFibonacci(number){

    if(number<=1){
        return number;
    }

    return calculateFibonacci(number-2) + calculateFibonacci(number-1);
}




//Recieve a message from parent process

process.on("message",(msg)=>{
    console.log(`Fib process has recieved a message `,msg);

    //CPU intensive computation 
    const result = calculateFibonacci(msg.number);

    //send a message back to the parent process 
    process.send(result);
    

})