var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var currentTime = 31;
var radioValue = [];
var x = 0;
var i = 0;
var j = 0;
var z = 0;
var intervalTimer;

var question1 = {
  question: 'What is the collective name for a group of lions?',
  correctAnswer: 'Pride',
  wrongAnswer1: 'Flock',
  wrongAnswer2: 'Herd',
  wrongAnswer3: 'School',
  lions: function () {
    $('#question1').html(this.question);
    $('#answer1b').html(this.correctAnswer);
    $('#answer1c').html(this.wrongAnswer1);
    $('#answer1d').html(this.wrongAnswer2);
    $('#answer1a').html(this.wrongAnswer3);
  }
};

var question2 = {
  question: 'Which snake is non-venomous?',
  correctAnswer: 'Python',
  wrongAnswer1: 'Rattlesnake',
  wrongAnswer2: 'Black Mamba',
  wrongAnswer3: 'King Cobra',
  snakes: function () {
    $('#question2').html(this.question);
    $('#answer2a').html(this.correctAnswer);
    $('#answer2b').html(this.wrongAnswer1);
    $('#answer2c').html(this.wrongAnswer2);
    $('#answer2d').html(this.wrongAnswer3);
  }
};

var question3 = {
  question: 'How many legs does a lobster have?',
  correctAnswer: '10',
  wrongAnswer1: '2',
  wrongAnswer2: '4',
  wrongAnswer3: '8',
  lobsters: function () {
    $('#question3').html(this.question);
    $('#answer3d').html(this.correctAnswer);
    $('#answer3b').html(this.wrongAnswer1);
    $('#answer3c').html(this.wrongAnswer2);
    $('#answer3a').html(this.wrongAnswer3);
  }
};

var question4 = {
  question: 'Which animal has the longest lifespan?',
  correctAnswer: 'Giant Tortoise',
  wrongAnswer1: 'Whale',
  wrongAnswer2: 'Elephant',
  wrongAnswer3: 'Human',
  lifespan: function () {
    $('#question4').html(this.question);
    $('#answer4c').html(this.correctAnswer);
    $('#answer4b').html(this.wrongAnswer1);
    $('#answer4a').html(this.wrongAnswer2);
    $('#answer4d').html(this.wrongAnswer3);
  }
};

var question5 = {
  question: 'What is the fastest land animal in the world?',
  correctAnswer: 'Cheetah',
  wrongAnswer1: 'Ostrich',
  wrongAnswer2: 'Roadrunner',
  wrongAnswer3: 'Horse',
  fastest: function () {
    $('#question5').html(this.question);
    $('#answer5b').html(this.correctAnswer);
    $('#answer5a').html(this.wrongAnswer1);
    $('#answer5d').html(this.wrongAnswer2);
    $('#answer5c').html(this.wrongAnswer3);
  }
};

function startTimer() {
  $('#timerDiv').html('<h2>' + currentTime + ' seconds</h2>');
  intervalTimer = setInterval(countDown, 1000);
  $("#allQuestions").show();
  $('#startButton').hide();
  question1.lions();
  question2.snakes();
  question3.lobsters();
  question4.lifespan();
  question5.fastest();
  countDown();
}

function restartQuiz() {
  $('#restartButton').show();
}

function reload() {
  location.reload();
}

function countDown() {
    if (currentTime > 0){
      currentTime--;
      $('#timerDiv').html('<h2>' + currentTime + ' seconds</h2>');
    }
    else {
      currentTime = 0;
      clearInterval(intervalTimer);
      $('#timerDiv').html('<h2>Times Up!</h2>'); 
      for (var i = 1; i < 6; i++) {
        radioValue[i] = $("input[name='rquestion" + i + "']:checked").val();
        if (radioValue[i] === "true"){
          correctAnswers++;
          console.log("the checked answer is right; " + radioValue[i]);
        }
        if (radioValue[i] === "false") {
          wrongAnswers++;
          console.log("the checked answer is wrong; " + radioValue[i]);
        }
        else {
          x = correctAnswers + wrongAnswers;
          unanswered = 5 - x;
          console.log(unanswered);
        }
      }
  
  $('#numberCorrect').html('<h2>Correct Answers: ' + correctAnswers + '</h2>');
  $('#numberIncorrect').html('<h2>Wrong Answers: ' + wrongAnswers + '</h2>');
  $('#numberUnanswered').html('<h2>Unanswered: ' + unanswered + '</h2>');
  restartQuiz();
  }
}

$('#restartButton').hide();
$("#allQuestions").hide();
$('#startButton').click(startTimer);
$('#restartButton').click(reload);