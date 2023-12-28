// Starting parameters

var buttonColours= ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


// for generating random number

function nextSequence(){
    var randomNum= Math.round(3*Math.random());
    console.log(randomNum);
    level++;
    return randomNum;
}

// To restart the game

function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    var randomChosenColour= buttonColours[nextSequence()];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
}

// For the starting of the game

var randomChosenColour= buttonColours[nextSequence()];
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
// console.log(gamePattern);
var buttonClicked= $("div#"+randomChosenColour)
buttonClicked.click(function(){
    buttonClicked.fadeOut(100).fadeIn("slow");
    playSound(randomChosenColour);
});

// to play the audio

function playSound(name){
    var audioFile= "./sounds/"+name+".mp3";
    var audio = new Audio(audioFile);
    audio.play();
}

// button and audio

$(".btn").on( "click", function(event) {
    var userChosenColour=event.target.id;
    // event.addClass("pressed");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAns(userClickedPattern.length-1);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
});

// animation to button

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () { 
        $("#"+currentColour).removeClass("pressed");
     },100);
}

// if any keyboard key is pressed

$(document).keydown(function () { 
    startOver();
    animatePress(gamePattern[0]);
    playSound(gamePattern[0]);
    $("h1").html("Level "+level);
    nextSequence();
});

// To check the answer

function checkAns(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
    }
    else{
        console.log("worng");
        $("body").addClass("game-over");
        setTimeout(function () { 
            $("body").removeClass("game-over");
         },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        console.log("ended");
        startOver();
        return;
    }
    if( userClickedPattern.length=== gamePattern.length){
        $("h1").html("Level "+level);
        setTimeout(function(){
            var randomChosenColour= buttonColours[nextSequence()];
            console.log(randomChosenColour);
            gamePattern.push(randomChosenColour);
            console.log(gamePattern);
            animatePress(gamePattern[gamePattern.length-1]);
            playSound(gamePattern[gamePattern.length-1]);   
            userClickedPattern=[];
        },1000);
    }
    
}


