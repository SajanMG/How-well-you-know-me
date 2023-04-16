var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ");
console.log("Welcome " + userName + " Do you know sajan?");
var score = 0;


// function

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer){
    console.log("right!");
    score = score + 1;
  }else { 
    console.log("wrong!");
    score = score - 1;
  }

  console.log("current score: "+ score);
  console.log("............");
}

var qOne= {
  question:'Where do i live?',
    answer:'Brisbane'
}

var qTwo= {
  question:'Where do i work?',
  answer:'Electric loans Australia'
}

var questions = [qOne, qTwo];

for (var i = 0; i < questions.length; i ++) {
  var currentQ= questions[i];
  play(currentQ.question, currentQ.answer);
}

console.log("Yay! You scored total: " + score);