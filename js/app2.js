'use strict';

var correct = 0;

// // Ask user's name!
var userName = prompt('What is your name?');
alert('Welcome to my website ' + userName + '! Let\'s play a guessing game! Answer yes or no to the following questions to see how well you know me!');

function question12345() {

  var questionArray = [
    'Do I have any pets?',
    'Do I like video games?',
    'Have I ever traveled outside of the United States?',
    'Am I a musician?',
    'Do I like to exercise?'
  ];

  var answerArray = [
    'yes',
    'yes',
    'no',
    'yes',
    'yes'
  ];

  var correctAnswer = [
    'Correct! I have two cats, one dog, and a bunny!',
    'Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!',
    'You\'re right, I haven\'t traveled out of the US, but traveling to places like Japan and Costa Rica are on my bucket list!',
    'Correct! I have had professional vocal training to sing opera! FIGARO!!!',
    'Correct! I do yoga every morning, you should try it out if you haven\'t already!'
  ];

  var wrongAnswer = [
    'Actually I have 4 pets! Two cats, one dog and a bunny!',
    'Wrong! I looooove video games silly!',
    'Wrong! Unfortunately I\'ve never traveled out of the US but I hope to go to Costa Rica at the end of this year!',
    'Wrong! Singing is my life!',
    'Wrong! Well I mean mostly wrong, it does depend on the day, but most days I love to do yoga!'
  ];

  // Question 1-5

  for (var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    if (answer.toLowerCase()[0] === answerArray[i][0]) {
      alert(correctAnswer[i]);
      correct++;
      console.log('Question ' + i + ' response is ' + answer);
    } else {
      alert(wrongAnswer[i]);
      console.log('Question ' + i + ' response is ' + answer);
    }
  }
}


// Sixth Question (Guess a Number)

function question6() {
  var guessNumber = 0;
  console.log('hello');
  while (guessNumber < 4) {
    var myNumber = prompt('Guess the number I am thinking of between 1 and 10!');
    if (myNumber === '6' || myNumber.toLowerCase() === 'six') {
      alert('Correct! That is exactly the number I was thinking of!');
      console.log('You are correct!');
      correct++;
      break;
    } else if (myNumber > 6) {
      alert('You guessed too high! Please try again!');
      console.log('You guessed too high of a number!');
    } else if (myNumber < 6) {
      alert('you guessed too low! Please guess again!');
      console.log('You guessed too low of a number!');
    }
    guessNumber++;
  }
}


// Question 7

function question7() {
  var myColors = ['red', 'blue', 'orange', 'yellow', 'pink', 'purple'];
  // var isWrong is a Boolean that mean if isWrong is equal to true than the user is incorrect.
  var isWrong = true;
  // To give the user the oppurtunity to guess six times, to potentially guess all of my favorite colors correctly, it requires a for loop nested into a for loop.
  for (var j = 0; j < 6; j++) {
    var color = prompt('What are some of my favorite colors?');
    for (var i = 0; i < myColors.length; i++) {
      if (color.toLowerCase() === myColors[i]) {
        alert('You are correct!');
        console.log('You are correct!');
        isWrong = false;
        correct++;
        break;
      }
    }
    if (isWrong === true) {
      alert('You are incorrect!');
      console.log('You are incorrect');
    } else {
      break;
    }
  }
  alert(myColors + ' are some of my favorite colors!');
  console.log(myColors + 'are my favorite colors.');
}


question12345();
question6();
question7();


// I created an alert connected to the variable correct in order to let the user know the score they got on my quiz
alert('You got ' + correct + ' out of 7 answers correct!');
console.log('You got' + correct + 'out of 7');
