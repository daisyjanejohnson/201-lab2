'use strict';

// Ask user's name!
var userName = prompt('What is your name?');
alert('Welcome to my website ' + userName + '!');

// First Question
var pets = prompt('Do I have any pets?');

// if they respond yes, I want to say 'Correct! I have two cats, one dog, and a bunny!'
// if they respond no, I want to say 'Actually I have 4 pets! Two cats, one dog and a bunny!'

if(pets.toLowerCase() === 'yes'){
  alert('Correct! I have two cats, one dog, and a bunny!');
} else if(pets.toLowerCase() === 'no'){
  alert('Actually I have 4 pets! Two cats, one dog and a bunny!');
} else {
  prompt('Please answer with a yes or no');
}

// Second Question
var videoGames = prompt('Do I like video games?');

// if they respond yes, I want to say 'Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!'
// if they respond no, 