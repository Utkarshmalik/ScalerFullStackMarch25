

const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priortiyColorContainer = document.querySelector(".priority_color_cont");
const textArea = document.querySelector(".textarea_cont");

addBtn.addEventListener("click",()=>{
    model.style.display="flex";
})

model.addEventListener("keypress",(e)=>{

    if(e.key!='Enter'){
        return;
    }

    //which which color is active

    const activeColorElement = priortiyColorContainer.querySelector(".active");
    const cColor = activeColorElement.classList[1];


    //what is the text inside the box 
    const content = textArea.value;


    console.log(`create a new ticket with color ${cColor} and content ${content} `);

    model.style.display="none";


})


priortiyColorContainer.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("priority_color")
    ){
        return;
    }

    if(e.target.classList.contains("active")){
        return;
    }

    const selectedColor = e.target.classList[1];

    console.log(selectedColor);

    const priorityColorBoxes=document.querySelectorAll(".priority_color");

    for(let i=0;i<priorityColorBoxes.length;i++){

        const priorityColorBox = priorityColorBoxes[i];


        const priortiyColor = priorityColorBox.classList[1];

        if(selectedColor==priortiyColor){
            priorityColorBox.classList.add("active");
        }else{
            priorityColorBox.classList.remove("active");
        }

    }



})