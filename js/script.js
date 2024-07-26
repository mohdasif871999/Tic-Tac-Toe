let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");


let turnO = true;   //playerX playerY
const winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations ${winner} is winner`;
    msgCont.classList.remove("hide");
}

const disBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true ;
    }
}

const checkWinner = () => {
    let isDraw = true;
    for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2 ===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
            disBoxes();
        }
      }
    }
        //draw condition
    for(let box of boxes){
        if(box.innerText==""){
             isDraw=false;
             break;
        }
    }
        if(isDraw){
            msg.innerText = "It was a Draw";
            msgCont.classList.remove("hide");
        }
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO===true)
        {
            box.innerText="X";
            turnO = false;
        }
        else{
            box.innerText="O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
