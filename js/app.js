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
    if (answer.toLowerCase()[0] === answerArray.toLowerCase()[i][0]) {
      alert(correctAnswer[i]);
      correct++;
    } else {
      alert(wrongAnswer[i]);
    }
  }
}


// Sixth Question (Guess a Number)

function question6() {
  var guessNumber = 0;
  var userNumber = 10;
  var randomNumber = Math.floor(Math.random() * userNumber) + 1;
  while (guessNumber < 4) {
    var myNumber = prompt('Guess the random number I am thinking of between 1 and 10!');
    if (myNumber === randomNumber) {
      alert('Correct! That is exactly the number I was thinking of!');
      correct++;
      break;
    } else if (myNumber > randomNumber) {
      alert('You guessed too high! Please try again!');
    } else if (myNumber < randomNumber) {
      alert('You guessed too low! Please guess again!');
    }
    if (guessNumber === 3) {
      alert('Darn, you have used all of your guesses! Sorry!');
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
        isWrong = false;
        correct++;
        break;
      }
    }
    if (isWrong === true) {
      alert('You are incorrect!');
    } else {
      break;
    }
  }
  alert('Red, blue, orange, yellow, pink and purple would have all been correct answers!');
}

// Calling the functions for questions 1-7 of my game
question12345();
question6();
question7();


// I created an alert connected to the variable correct in order to let the user know the score they got on my quiz
alert('You got ' + correct + ' out of 7 answers correct!');
