const n=10;

const table = document.querySelector("#table");

initiliseGird(n);

table.addEventListener("mouseover",(e)=>{

    if(!e.target.classList.contains('box')){
        return;
    }

    const position =  e.target.dataset.index;

    let boxes=document.querySelectorAll(".box");

    const [selectRow,selectedCol]  = position.split(',');

    //removing the yellow class on all the cells 
    for(let i=0;i<boxes.length;i++){
        boxes[i].classList.remove('yellow');
    }

    traverseTopLeft(Number(selectRow),Number(selectedCol),boxes);
    traverseTopRight(Number(selectRow),Number(selectedCol),boxes);
    traverseBottomLeft(Number(selectRow),Number(selectedCol),boxes);
    traverseBottomRight(Number(selectRow),Number(selectedCol),boxes);

})

function traverseTopLeft(row,col,boxes){
    while(row>=0 && col>=0){
        //make row,col box as yellow 
        let boxNum = row*n + col;
        boxes[boxNum].classList.add('yellow');
        row--;
        col--;
    }
}

function traverseTopRight(row,col,boxes){
    while(row>=0 && col<n){
        //make row,col box as yellow 
        let boxNum = row*n + col;
        boxes[boxNum].classList.add('yellow');
        row--;
        col++;
    }
}


function traverseBottomLeft(row,col,boxes){
    while(row<n && col>=0){
        //make row,col box as yellow 
        let boxNum = row*n + col;
        boxes[boxNum].classList.add('yellow');
        row++;
        col--;
    }
}


function traverseBottomRight(row,col,boxes){
    while(row<n && col<n){
        //make row,col box as yellow 
        let boxNum = row*n + col;
        boxes[boxNum].classList.add('yellow');
        row++;
        col++;
    }
}


function initiliseGird(n){

    for(let i=0;i<n;i++){

        let row = document.createElement('tr');
        let cells = document.createDocumentFragment();

        for(let j=0;j<n;j++){

            let cell = document.createElement('td');
            // cell.textContent = `${i},${j}  `;
            cell.setAttribute("class",'box');
            cell.setAttribute("data-index",`${i},${j}`)

            let sum = i+j;

            let isWhite = sum%2==0;

            if(isWhite){
                cell.classList.add('white');
            }else{
                cell.classList.add('black');
            }


            cells.appendChild(cell);
        }

        row.appendChild(cells);
        table.appendChild(row);
    }

}