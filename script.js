var numSquares=6
var colors=[];
var favColor;

var color=document.getElementById("colordisp");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var but=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){
    setMode();
    setSquares();
    reset();
}

function setMode(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"?numSquares=3:numSquares=6;
            reset();
            });
        }
}

function setSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor= this.style.backgroundColor;
            if(clickedColor===favColor){
                alert("Correct");
                message.textContent="Correct";
                changeColor(clickedColor);
                h1.style.backgroundColor=clickedColor;
                but.textContent="Play Again....";
            }
            else{
                this.style.backgroundColor="#232323";
                message.textContent="Try Again";
            }
        });
    }
}

function reset(){
    colors=randomColors(numSquares);
    favColor=pickedColor();
    color.textContent=favColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
    message.textContent="";
    but.textContent="New Colors";
}

but.addEventListener("click",function(){
    reset();
})
 

function changeColor(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor=color;
        
    }
}

function pickedColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(generateColor()); 
    }
    return arr;
}

function generateColor(){
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+ red +", "+ green +", " + blue + ")";
}