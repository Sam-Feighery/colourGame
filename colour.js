var numberSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //On page load these funtions are run
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    //Setup Mode buttons eventlistners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    // setup squares eventlistners
    for (var i = 0; i < squares.length; i++) {
        //add clicked color to squares
        squares[i].addEventListener("click", function () {
            //grab color that was picked
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor === pickedColour) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColour(clickedColor);
                h1.style.background = clickedColor;
            } else {
                // if incorrect square will disappear 
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}



function reset() {
    //Generate all new colours
    colours = generateRandomColours(numberSquares);
    //Pick new random colour from arr
    pickedColour = pickColour();
    //Change colours display to match picked colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    //Change colours of squares
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})

colourDisplay.textContent = pickedColour;

function changeColour(colours) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each colours to match given colour
        squares[i].style.background = colours;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}


function generateRandomColours(num) {
    //Make an array
    var arr = []
    //Loop to repeat (num) times
    for (var i = 0; i < num; i++) {
        //use randomColour and push it into my arr
        arr.push(randomColour())
    }
    //return array
    return arr;
}

function randomColour() {
    //pick a "red" from 0 to -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}