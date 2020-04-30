'use strict';

// Ask user's name!
var userName = prompt('What is your name?');
alert('Welcome to my website ' + userName + '! Let\'s play a guessing game! Answer yes or no to the following questions to see how well you know me! ');

// First Question
var correct = 0;
var pets = prompt('Do I have any pets?');

// if they respond yes I want to say, 'Correct! I have two cats, one dog, and a bunny!'
// if they respond no I want to say, 'Actually I have 4 pets! Two cats, one dog and a bunny!'

if(pets.toLowerCase() === 'yes' || pets.toLowerCase() === 'y'){
  alert('Correct! I have two cats, one dog, and a bunny!');
  // console.log('You are Correct!');
  correct++;
} else if(pets.toLowerCase() === 'no' || pets.toLowerCase() === 'n'){
  alert('Actually I have 4 pets! Two cats, one dog and a bunny!');
  // console.log('You are Incorrect!');
} else {
  prompt('Please answer with a yes or no please and thank you.');
}

// Second Question
var videoGames = prompt('Do I like video games?');

// if they respond yes I want to say, 'Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!'
// if they respond no I want to say, 'Wrong! I looooove video games silly!'

if(videoGames.toLowerCase() === 'yes' || videoGames.toLowerCase() === 'y'){
  alert('Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!');
  // console.log('You are Correct!');
  correct++;
} else if(videoGames.toLowerCase() === 'no' || videoGames.toLowerCase() === 'n'){
  alert('Wrong! I looooove video games!');
  // console.log('You are Incorrect!');
} else {
  prompt('Please answer with a yes or no pretty please.');
}

// Third Question
var travel = prompt('Have I ever traveled outside of the United States?');

// if they respond yes I want to say, 'Wrong! Unfortunately I've never traveled out of the US but I hope to go to Costa Rica at the end of this year!'
// if they respond no I want to say, 'You're right, I haven't traveled out of the US, but traveling to places like Japan and Costa Rica are on my bucket list!'

if(travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y'){
  alert('Wrong! Unfortunately I\'ve never traveled out of the US but I hope to go to Costa Rica at the end of this year!');
  // console.log('You are Incorrect!');
} else if(travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n'){
  alert('You\'re right, I haven\'t traveled out of the US, but traveling to places like Japan and Costa Rica are on my bucket list!');
  // console.log('You are Correct!');
  correct++;
} else {
  prompt('Please guess yes or no if you wouldn\'t mind.');
}

// Fourth Question
var music = prompt('Am I a musician?');

// if they respond yes I want to say, 'Correct! I have had professional vocal training to sing opera! FIGARO!!!'
// if they respond no I want to say, 'Wrong! Singing is my life!'

if(music.toUpperCase() === 'YES' || music.toUpperCase() === 'Y'){
  alert('Correct! I have had professional vocal training to sing opera! FIGARO!!!');
  // console.log('You are Correct!');
  correct++;
} else if(music.toUpperCase() === 'NO' || music.toUpperCase() === 'N' ){
  alert('Wrong! Singing is my life!');
  // console.log('You are Incorrect!');
} else {
  prompt('Please answer yes or no to see if you got it right!');
}

// Fifth Question
var exercise = prompt('Do I like to exercise?');

// if they respond yes I want to say, 'Correct! I do yoga every morning, you should try it out if you haven/'t already!'
// if they respong no I want to say, 'Wrong! Well I mean mostly wrong, it does depend on the day, but most days I love to do yoga!'

if(exercise.toLowerCase() === 'yes' || exercise.toLowerCase() === 'y'){
  alert('Correct! I do yoga every morning, you should try it out if you haven\'t already!');
  // console.log('You are Correct!');
  correct++;
} else if(exercise.toLowerCase() === 'no' || exercise.toLowerCase() === 'n'){
  alert('Wrong! Well, I mean mostly wrong, it does depend on the day, but most days I love to do yoga!');
  // console.log('You are Incorrect!');
} else {
  prompt('Please take your best guess by responding yes or no!');
}

// Sixth Question (Guess a Number)
// I want the user to guess the number I am thinking of between 1 and 10 (6), and give them 4 tries.
var guessNumber = 0;
console.log('hello');
while (guessNumber < 4){
  var myNumber = prompt('Guess the number I am thinking of between 1 and 10!');
  if(myNumber === '6' || myNumber.toLowerCase() === 'six'){
    alert('Correct! That is exactly the number I was thinking of!');
    console.log('You are correct!');
    correct++;
    break;
  }else if(myNumber > 6){
    alert('You guessed too high! Please try again!');
    console.log('You guessed too high of a number!');
  } else if(myNumber < 6){
    alert('you guessed too low! Please guess again!');
    console.log('You guessed too low of a number!');
  }
  guessNumber++;
}

// Question 7
// I am asking the user to guess some of my favorite colors with six possible correct answers in an array
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
// This alert tells the user what the correct answers were for the previous question.
alert(myColors + ' are some of my favorite colors!');
console.log(myColors + 'are my favorite colors.');

// I created an alert connected to the variable correct in order to let the user know the score they got on my quiz
alert('You got ' + correct + ' out of 7 answers correct!');
console.log('You got' + correct + 'out of 7');

