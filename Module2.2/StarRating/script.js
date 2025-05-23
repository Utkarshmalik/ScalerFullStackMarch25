const starContainer = document.querySelector(".star_container");
const stars = document.querySelectorAll(".star");
const count = document.querySelector("#count");

let currentRating = 0;


starContainer.addEventListener("mouseover",(e)=>{

    const element = e.target;

    let isRequired = element.classList.contains('star');

    if(!isRequired){
        return;
    }

    const rating = element.getAttribute("rating");
    console.log(rating);

    fillStars(rating);

})


starContainer.addEventListener("mouseleave",(e)=>{
    console.log(e.target);

    fillStars(currentRating);

})


starContainer.addEventListener("click",(e)=>{

    const element = e.target;

    let isRequired = element.classList.contains('star');

    if(!isRequired){
        return;
    }

    console.log("click ",e.target);

    const rating = element.getAttribute("rating");
    console.log(rating);

    currentRating = rating;
    fillStars(rating);
    count.textContent = rating;


})



function fillStars(n){

    resetFill();

    for(let i=0;i<n;i++){
        stars[i].classList.add('yellow');
    }


}

function resetFill(){
   for(let i=0;i<stars.length;i++){
        stars[i].classList.remove('yellow');
    }
}




// mouseleave : Triggers: When the pointer leaves the element itself, not its children
//mouseout : Triggers: When the pointer moves out of the element or any of its child elements.

