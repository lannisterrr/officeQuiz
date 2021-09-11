var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Siddhant",
    score: 3,
  },

  {
    name: "Ashu",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What does Michael pretend to fire Pam over in season one?",
  answer: "notes"
}, {
  question: "What's Pam's favorite flavor of yogurt?",
  answer: "Mixed berry"
},
{
  question: "What's Phyllis's maiden name?",
  answer: "Lapin"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "let's see if you know Office US.");
}


// play function
const play = (question, answer)  =>{
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("High scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
