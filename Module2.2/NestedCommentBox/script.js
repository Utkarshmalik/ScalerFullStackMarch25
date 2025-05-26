

const submitBtn = document.getElementById('submitComment');
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("commentsContainer");

submitBtn.addEventListener("click",()=>{
    const commentText = commentInput.value.trim();
    addComment(commentText);
    commentInput.value = "";

})

commentsContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("replyBtn")){

        const parentComment = e.target.parentElement;
        const replyInput = parentComment.querySelector(".replyInput");
        const replyText = replyInput.value;
        addReply(parentComment, replyText);
        replyInput.value = "";
    }
})

function addComment(text){

    const commentElement = document.createElement("div");
    commentElement.classList  ="comment";
    commentElement.innerHTML = `
       <p> ${text} </p>
            <button class="replyBtn"> Reply </button>
            <textarea class="replyInput" placeholder="Write a reply.."></textarea>
            <div class="repliesContainer">
            </div>
    `

    commentsContainer.appendChild(commentElement);
}


function addReply(parentComment, replyText){

          const replyElement = document.createElement("div");
        replyElement.className  = 'reply';
        replyElement.innerHTML = `<p> ${replyText}  </p>`
        const repliesContainer= parentComment.querySelector(".repliesContainer");
        repliesContainer.appendChild(replyElement);
}