var computerChoise = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuessed = [];
var computerGuessed = [];

{

    window.onload = function () {
        var computer1Guessed = computerChoise[Math.floor(Math.random() * computerChoise)];
        computerGuessed.push(computer1Guessed);

    }

    document.onkeyup = function (event) {
        var letters1Guessed = event.key;
        letterGuessed.push(letters1Guessed);
        console.log(letters1Guessed);

        if ((letters1Guessed === computerGuessed[0]) && (guessesLeft > 0)) {
            wins++;
            guessesLeft = 9;
            letterGuessed.length = 0;
            computerGuessed.length = 0;
            var computer1Guessed = computerChoise[Math.floor(Math.random() * computerChoise.length)];
            computerGuessed.push(computer1Guessed);
        } else if ((letters1Guessed !== computerGuessed[0] && guessesLeft > 0)) {
            guessesLeft = guessesLeft - 1;
        } else {
            losses++;
            guessesLeft = 9;
            letterGuessed.length = 0;
            computerGuessed.length = 0;
            var computer1Guessed = computerChoise[Math.floor(Math.random() * computerChoise.length)];
            computerGuessed.push(computer1Guessed);
        }
        renderHtml(letters1Guessed);
    }

    function renderHtml(letters1Guessed) {
        var html =
            "<p> Guess the Letter: " + letters1Guessed + " </p>" +
            "<p> Wins: " + wins + "</p>" +
            "<p> Losses: " + losses + "</p>" +
            "<p> Guesses left: " + guessesLeft + "</p>" +
            "<p> Your Guesses so far: " + letterGuessed + "</p>";
        document.getElementById('game').innerHTML = html;
    }

}


// function newFunction() {
//     return "<p> Guess the Letter?</p>";
// }
// // var isDuplicate = false;
// for (var i = 0; i < userAnswers.length; i++) { //for every previous answer
//     if (currentAnswer == userAnswers[i]) { //check if the current answer is a previous one
//         isDuplicate = true;
//         break; //exit loop
//     }
// }
// if (!isDuplicate) { //different than previous
//     userAnswers[userAnswers.length] = currentAnswer;
//     //do other code here
// }