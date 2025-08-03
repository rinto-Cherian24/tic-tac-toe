let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO

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

boxes.forEach ((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}     

const showWinner = (winner) => {
    msg.innerText= `Congratulations! The Winner is PLAYER ${winner}`;
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner is",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
    
};

const resetGame = () => {
    turnO = true;
    msg.innerText="";
    enableBoxes();
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click", resetGame);