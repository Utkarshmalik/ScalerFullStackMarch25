

const startButton = document.querySelector("#start");
const timerInputs = document.querySelector(".timer_inputs");

const hoursInput = timerInputs.querySelector("#hrs");
const minutesInput = timerInputs.querySelector("#minutes");
const secondsInput = timerInputs.querySelector("#seconds");



startButton.addEventListener("click",(e)=>{

    console.log("start timer");


    const hrs = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;


    const countDownSeconds = hrs * 60 * 60 + minutes * 60 + seconds;


    timer(countDownSeconds);

})



function timer(countDownSeconds){

    console.log("count value ",countDownSeconds);

    if(countDownSeconds===0){
        return;
    }


    countDownSeconds--;

    updateUIWithHrsMinutesSeconds(countDownSeconds);


    setTimeout(()=>{
        timer(countDownSeconds);
    },1000);

}


function updateUIWithHrsMinutesSeconds(countDownSeconds){

    let hrs = Math.floor(countDownSeconds/3600);

    let mins = Math.floor( (countDownSeconds%3600)/60 );

    let seconds = Math.floor(countDownSeconds%60);

    console.log(`${hrs}:${mins}:${seconds}`);

    hoursInput.value=hrs;
    minutesInput.value=mins;
    secondsInput.value=seconds;



}






// 100 :  0 ,1 , 40

// 5000 

// hrs = 5000/3600 = 1 hour 

//     (5000%3600)/60 = 23 minutes 

//     5000%60 = 20 


//     50000 : 1 hour 23 min 20 sec




