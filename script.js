var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var totalscore = document.getElementById("totalscore");
var restartBtn = document.getElementById("restart-btn");
var checkBtn = document.getElementById("check-btn");

var randomNumber = Math.floor(Math.random() * 10) + 1;
var score = 10;

function check() {
    var enterednumber = Number(guessnumber.value);

    if (!guessnumber.value || isNaN(enterednumber)) {
        result.textContent = "Please enter a number!";
        result.className = "result wrong";
        return;
    }

    if (randomNumber === enterednumber) {
        console.log("right");
        result.textContent = "Correct! You won!";
        result.className = "result right";
        guessnumber.disabled = true;
        checkBtn.disabled = true;
        restartBtn.style.display = "inline-block";
        setTimeout(function() {
            alert("Congratulations! You won!");
        }, 50);
    } else {
        score = score - 1;
        totalscore.textContent = "score: " + score;
        result.textContent = enterednumber > randomNumber ? "Wrong! Try a smaller number." : "Wrong! Try a larger number.";
        result.className = "result wrong";

        if (score <= 0) {
            result.textContent = "Game Over! The number was " + randomNumber;
            guessnumber.disabled = true;
            checkBtn.disabled = true;
            restartBtn.style.display = "inline-block";
        }
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    score = 10;
    guessnumber.value = "";
    guessnumber.disabled = false;
    checkBtn.disabled = false;
    restartBtn.style.display = "none";
    totalscore.textContent = "score: 10";
    result.textContent = "You are wrong/right";
    result.className = "result";
    guessnumber.focus();
}

// Allow pressing 'Enter' key to check
guessnumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        check();
    }
});
