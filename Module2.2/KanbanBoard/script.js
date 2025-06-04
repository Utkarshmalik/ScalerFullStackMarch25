

const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priortiyColorContainer = document.querySelector(".priority_color_cont");
const textArea = document.querySelector(".textarea_cont");
const pendingContainer = document.querySelector('.pending_cont');
const colors = ["pink","blue","purple","green"];
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority");
const deleteBtn = document.querySelector(".remove-btn");



addBtn.addEventListener("click",()=>{
    model.style.display="flex";
})


showExistingTicket();




model.addEventListener("keypress",(e)=>{

    if(e.key!='Enter'){
        return;
    }

    //which which color is active

    const activeColorElement = priortiyColorContainer.querySelector(".active");
    const cColor = activeColorElement.classList[1];


    //what is the text inside the box 
    const content = textArea.value;


  
   const { randomUUID } = new ShortUniqueId({ length: 10 });
   const ticketId = randomUUID();



    createNewTicket(content,cColor,ticketId,false);

    textArea.value="";
    model.style.display="none";


})


function addToTicketsInLocalStorage(ticketObj){

    var existingTickets = localStorage.getItem("tickets");

    if(existingTickets==null){
        existingTickets=[];
    }else{
        existingTickets = JSON.parse(existingTickets);
    }

    existingTickets.push(ticketObj);

    localStorage.setItem("tickets",JSON.stringify(existingTickets));

}

function showExistingTicket(){

 var existingTickets = localStorage.getItem("tickets");

    if(existingTickets==null){
        existingTickets=[];
    }else{
        existingTickets = JSON.parse(existingTickets);
    }

    existingTickets.forEach((ticket)=>{

        const {content,color,id}=ticket;

        createNewTicket(content,color,id,true);
    })


    
}
function createNewTicket(content,color,id,isExistingTicket){

    console.log(`create a new ticket with color ${color} , content ${content} 
        and ticketId ${id}`);

        const ticketContainer = document.createElement("div");
        ticketContainer.setAttribute("class","ticket_cont");

        ticketContainer.innerHTML = `
        <div class="ticket_color ${color}">  </div>
                    <div class="ticket_id">#${id} </div>
                    <div class="ticket_area"> ${content} </div>
                    <div class="lock_unlock">
                   <i class="fa fa-lock"></i>
                    </div>
        `;

        pendingContainer.appendChild(ticketContainer);

        //color click
        const ticketColorElem = ticketContainer.querySelector(".ticket_color");
        ticketColorElem.addEventListener("click",toggleColor);

        //lock clicked
        const lockBtn = ticketContainer.querySelector(".lock_unlock");
        lockBtn.addEventListener("click",(e)=>handleLockUnlock(e));


        //container click 
        ticketContainer.addEventListener("click",handleContainerClick);


        if(!isExistingTicket){
        const ticketObj = {content,color,id};
        addToTicketsInLocalStorage(ticketObj);
        }


}



function handleContainerClick(e){

    const isDeleteButtonActivated = deleteBtn.children[0].classList.contains("red");

    if(!isDeleteButtonActivated){
        return;
    }

    e.currentTarget.remove();
    
}

function handleLockUnlock(e){

    const ticketContainer = e.target.parentElement.parentElement;
    const ticketArea = ticketContainer.querySelector('.ticket_area');



    const isLocked = e.target.classList.contains("fa-lock");

    if(isLocked){
        e.target.classList.remove("fa-lock");
        e.target.classList.add("fa-unlock");
        ticketArea.setAttribute("contenteditable","true");

    }else{
        e.target.classList.add("fa-lock");
        e.target.classList.remove("fa-unlock");
        ticketArea.setAttribute("contenteditable","false");
    }

}


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

toolBoxPriorityContainer.addEventListener("click",(e)=>{

    if(e.target===e.currentTarget){
        return;
    }

    const currentColorElement = e.target;
    const selectedColor = currentColorElement.classList[1];

    console.log(selectedColor);


    const allTickets = document.querySelectorAll(".ticket_cont");

    
    for(let i=0;i<allTickets.length;i++){

        const ticketContainer = allTickets[i];
        const ticketColorElem = ticketContainer.querySelector(".ticket_color");
        const cTicketColor = ticketColorElem.classList[1];

        console.log(cTicketColor);

        if(cTicketColor!=selectedColor){
            ticketContainer.style.display="none";
        }else{
            ticketContainer.style.display="block";
        }

    }
})



toolBoxPriorityContainer.addEventListener("dblclick",(e)=>{

    if(e.target===e.currentTarget){
        return;
    }

    const allTickets = document.querySelectorAll(".ticket_cont");

    for(let i=0;i<allTickets.length;i++){
        const ticketContainer = allTickets[i];
        ticketContainer.style.display="block";
    }
})


deleteBtn.addEventListener("click",(e)=>{

    e.target.classList.toggle('red');

})




function toggleColor(e){
    
    console.log(e.target);

    const cColor = e.target.classList[1];

    const idx = colors.indexOf(cColor); 


    const nextIndx = (idx+1)%(colors.length);

    const requiredColor = colors[nextIndx];

    console.log(requiredColor);

    e.target.classList.remove(cColor);
    e.target.classList.add(requiredColor);

}