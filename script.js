let boxs=document.querySelectorAll(".box");
let restbtn=document.querySelector(".resetbtn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");




let turnO=true; //player X,Player o

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if (turnO) {
           box.innerText="O";
           turnO=false;
           
        }
        else{
            box.innerText="X";
            turnO=true;
            
        }
        box.disabled=true;

        checkWiner();
    });
});



const restGame=()=>{
      turnO=true;
      enableBoxes();
      msgContainer.classList.add("hide");

}


const  disbaleBoxes=()=>{
    for (const box of boxs) {
      box.disabled=true; 
    }
}

const  enableBoxes=()=>{
    for (const box of boxs) {
      box.disabled=false; 
      box.innerText=" ";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}





const checkWiner=()=>{
    for (const pattern of winPatterns) {
            
        let posVal1=boxs[pattern[0]].innerText;
        let posVal2=boxs[pattern[1]].innerText;
        let posVal3=boxs[pattern[2]].innerText;

        if (posVal1 != '' && posVal2 != '' && posVal3 !='') {
            
            if (posVal1 === posVal2 && posVal2=== posVal3 ) {
                 console.log("winner",posVal1);
                 
                 showWinner(posVal1);
            }

        }
           

    }
};


newGameBtn.addEventListener("click",restGame);

restbtn.addEventListener("click",restGame);


