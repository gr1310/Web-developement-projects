var image_list=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var choice1 = Math.floor(6*Math.random());
var choice2 = Math.floor(6*Math.random());
document.querySelectorAll("img")[0].setAttribute("src",image_list[choice1]);
document.querySelectorAll("img")[1].setAttribute("src",image_list[choice2]);
if(choice1<choice2){ 
    document.querySelector("h1").innerHTML="Player 2 wins";
} else if(choice1==choice2){
    document.querySelector("h1").innerHTML="Refresh again";
}
else{
    document.querySelector("h1").innerHTML="Player 1 wins";
}