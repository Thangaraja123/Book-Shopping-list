// Get the id and Classes

const Xturn = document.getElementById('Xturn');
const Oturn = document.getElementById('Oturn');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const mains = document.querySelector('.mains');
const turns = document.getElementById('turns');
const boxes = document.querySelectorAll('.item'); 
const items = document.querySelectorAll('.item');
const result = document.querySelector('.result');
const output = document.getElementById('output');
const play  = document.getElementById('play');

let player_x = "X";
let player_o = "O";

console.log(boxes);

let winning = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
console.log(winning);
//Select the Player Function

Xturn.addEventListener('click',turnclickX);
Oturn.addEventListener('click',turnclickO);



function turnclickX(){

    select();
    turns.value = Xturn.innerText + " Turn";
}

function turnclickO(){
    
    select();
    turns.value = Oturn.innerText + " Turn";

}

function select(){
    header.style.display = "none";
    container.style.display = "block";
    mains.style.display = "block";
    
}


// Box Click Function

 boxes.forEach( box=>{

    box.addEventListener('click',boxclick);

    function boxclick(){

        if(turns.value === "Player X Turn"){
    
            Turns();
            box.innerText = player_x;
            turns.value = "Player O Turn";
            
        }

        else if (turns.value ===  "Player O Turn"){

            Turns();
            box.innerText = player_o;
            turns.value = "Player X Turn";
        }
        winningResult();
        drawResult();
        
        
    }

    //Winning Function

    function winningResult() {

        for (let i = 0; i<=7; i++){

          
            const win = winning[i];  

            console.log(win)

            if (boxes[win[0]].innerText === "X" && boxes[win[1]].innerText === "X" && boxes[win[2]].innerText === "X" ){
                
                wins();
                output.value = "Player X Won the game!!!!";
                
            }

            else if (boxes[win[0]].innerText === "O" && boxes[win[1]].innerText === "O" && boxes[win[2]].innerText === "O" ){

                wins();
                output.value = "Player O Won the game!!!!";
            

            }

            

        }

            
       
    }   

    
//Draw Function 

    function drawResult(){

        if(boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != ""
            && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != ""
            && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != ""){



                container.style.display = "none";
                mains.style.display = "none";
                result.style.display = "block";
                output.value = "Match Drawn";
                output.style.fontSize = "25px";
                output.style.color = "blue";

} 

    }

    function Turns(){
        box.style.textAlign = "center";
        box.style.color = "white";
        box.style.fontFamily = "sans serif"
        box.style.fontSize = "50px";
        box.style.fontWeight = "bold";
     }

    

 });


 // Play Again Function

 play.addEventListener('click',playagain);

 function playagain(){

    result.style.display = "none";
    header.style.display = "block";
    window.location.reload();
            
 }

// win functions

 function wins(){
    container.style.display = "none";
    mains.style.display = "none";
    result.style.display = "block";
    output.style.fontSize = "17px";
    output.style.color = "blue";

}
