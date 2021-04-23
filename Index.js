var readlineSync = require('readline-sync')
var userAnswer = readlineSync.question("Hey!, May I know your name?\n")
console.log('Welcome ' + userAnswer + " to \'How much you know Bharat Chotwani\' !\nEnter \"e\" at any point to exit." )

console.log("----------------------")

var score = 0;

// data of high score (array)
var highScore = [
  {
    name: "Bharat",
    score: 3
  },
  {
    name: "Shashank",
    score: 2
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);


  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!")
    score = score + 1
  }
  else {
    console.log("wrong!\nCorrect answer is: " + currentQuestion.answer)
    score = score - 1
  }
  console.log("current score: ", score)
  console.log("-----------------------")
}

// object
// var questionOne = {
//   question: "Where do I live? ",
//   answer: "bina"
// }
// var questionTwo = {
//   question: "What are my favorite colors? ",
//   answer: "white-yellow"
// }

var questionAnswer = [{
   question: "Q.01. Where do I live?\n",
   answer: "Bina"
  }, 
  { 
    question: "Q.02. What is my favorite color?\n",
   answer: "White"
   },
   {
   question: "Q.03. Do you know that where I learnt programing? \n",
   answer: "Neog Camp"}];

for(var i=0; i < questionAnswer.length; i++) {
  var currentQuestion = questionAnswer[i];
  play(currentQuestion.question, currentQuestion.answer)

  console.log("You Score is: " + score)
}

console.log("Thanks For Playing!", "Your final score is: " + score +"\n")

console.log("Top Scores:\n")

for(var i = 0;  i < highScore.length; i++) {
  console.log("Name: " + highScore[i].name, "\n Score is: " + highScore[i].score);
  

}

console.log("If you have beaten the score\n" + "then please send a screenshort! :p ")