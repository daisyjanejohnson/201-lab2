'use strict';

// Ask user's name!
var userName = prompt('What is your name?');
alert('Welcome to my website ' + userName + '!');

// First Question
var pets = prompt('Do I have any pets?');

// if they respond yes I want to say, 'Correct! I have two cats, one dog, and a bunny!'
// if they respond no I want to say, 'Actually I have 4 pets! Two cats, one dog and a bunny!'

if(pets.toLowerCase() === 'yes'){
  alert('Correct! I have two cats, one dog, and a bunny!');
} else if(pets.toLowerCase() === 'no'){
  alert('Actually I have 4 pets! Two cats, one dog and a bunny!');
} else {
  prompt('Please answer with a yes or no please and thank you.');
}

// Second Question
var videoGames = prompt('Do I like video games?');

// if they respond yes I want to say, 'Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!'
// if they respond no I want to say, 'Wrong! I looooove video games silly!'

if(videoGames.toLowerCase() === 'yes'){
  alert('Correct! My favorite video game at the moment is Animal Crossing! Curse you Tom Nook!');
} else if(videoGames.toLowerCase() === 'no'){
  alert('Wrong! I looooove video games!');
} else {
  prompt('Please answer with a yes or no pretty please.');
}

// Third Question
var travel = prompt('Have I ever traveled outside of the United States?');

// if they respond yes I want to say, 'Wrong! Unfortunately I've never traveled out of the US but I hope to go to Costa Rica at the end of this year!'
// if they respond no I want to say, 'You're right, I haven't traveled out of the US, but traveling to places like Japan and Costa Rica are on my bucket list!'

if(travel.toLowerCase() === 'yes'){
  alert('Wrong! Unfortunately I\'ve never traveled out of the US but I hope to go to Costa Rica at the end of this year!');
} else if(travel.toLowerCase() === 'no'){
  alert('You\'re right, I haven\'t traveled out of the US, but traveling to places like Japan and Costa Rica are on my bucket list!');
} else {
  prompt('Please guess yes or no if you wouldn\'t mind.');
}

// Fourth Question
var music = prompt('Am I a musician?');

// if they respond yes I want to say, 'Correct! I have had professional vocal training to sing opera! FIGARO!!!'
// if they respond no I want to say, 'Wrong! Singing is my life!'

if(music.toUpperCase() === 'YES'){
  alert('Correct! I have had professional vocal training to sing opera! FIGARO!!!');
} else if(music.toUpperCase() === 'NO'){
  alert('Wrong! Singing is my life!');
} else {
  prompt('Please answer yes or no to see if you got it right!');
}

// Fifth Question
var exercise = prompt('Do I like to exercise?');

// if they respond yes I want to say, 'Correct! I do yoga every morning, you should try it out if you haven/'t already!'
// if they respong no I want to say, 'Wrong! Well I mean mostly wrong, it does depend on the day, but most days I love to do yoga!'

if(exercise.toLowerCase() === 'yes'){
  alert('Correct! I do yoga every morning, you should try it out if you haven\'t already!');
} else if(exercise.toLowerCase() === 'no'){
  alert('Wrong! Well I mean mostly wrong, it does depend on the day, but most days I love to do yoga!');
} else {
  prompt('Please take your best guess by responding yes or no!');
}
