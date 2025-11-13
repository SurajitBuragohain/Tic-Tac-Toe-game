let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let para=document.querySelector("#message");

let playerO=true;
const Wptn=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = ()=>{
    playerO=true;
    para.innerText="";
    enableBoxes();
}
const disabledBoxes=()=>{
   boxes.forEach((box)=>{
    box.disabled=true;
   })
}
const enableBoxes=()=>{
   boxes.forEach((box)=>{
   box.disabled=false;
   box.innerText="";
   })
}

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(playerO==true){
            box.innerText="O";
            playerO=false;
        }
        else{
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;
        checkWinner();
     })
})

const checkWinner = () =>{
    for(let W of Wptn){
        let p1=boxes[W[0]].innerText;
        let p2=boxes[W[1]].innerText;
        let p3=boxes[W[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
               para.innerText="Player "+p1+" winner!";
               disabledBoxes();
              
        }
    }
    }
   
};
resetBtn.addEventListener("click",resetGame);