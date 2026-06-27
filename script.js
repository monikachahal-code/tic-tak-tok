// console.log("js loded");


let boxs=document.querySelectorAll(".div1");
let result=document.querySelector("#result")
let restartbtn=document.querySelector("#restart")
// console.log(boxs.length);
// alert("working")

restartbtn.addEventListener("click",function(){
    resetGame();
})

let turn="X";
let gameOver=false;

boxs.forEach(function(box){
    

box.addEventListener("click",function (){
    console.log("clicked");
   
    
    if(box.innerHTML !==""|| gameOver){
        return;
    }
    box.innerHTML=turn;
    if(turn=="X"){
        turn="0";
    }
    else{
        turn="X";
    }
    checkWinner();
    checkDraw();
});
});

function checkWinner(){
    let winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];


    winPatterns.forEach(function(pattern){
        let a=boxs[pattern[0]].innerHTML;
        let b=boxs[pattern[1]].innerHTML;
        let c=boxs[pattern[2]].innerHTML;

        if(a !==""&& a===b && b===c){
            gameOver=true;

            result.innerHTML=a+"winner ";

           restartbtn.style.display="block";

            if(playAgain){
                resetGame();
            }
        }
    })
}

function checkDraw(){
    if(gameOver){
        return;
    }
    let filled =true;
    boxs.forEach(function(box){
        if (box.innerHTML===""){
            filled=false;
        }
    });

    if(filled){
        result.innerHTML="Match Draw";
        restartbtn.style.display="block";
       
        if(playAgain){
            resetGame();
        }
    }
}

function resetGame(){
    boxs.forEach(function(box){
        box.innerHTML ="";
    });

    turn ="X";
    gameOver=false;
    result.innerHTML="";
}