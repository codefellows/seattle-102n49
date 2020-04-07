function hello() {
  console.log('Hello Ryan')
}

function helloYou(name) {
  console.log('Hello ' + name);
}
var username;
var greeting;
var bananas;
var yum = 'a banana';
//  console.log(yum);

// username = prompt('What is your name?')

function helloUsername(username) {
  console.log('Hello ' + username);
}

// helloUsername(username);

function sayHello(cookie) {
  var message = 'Hello ' + cookie;
  return message;
}

function ryansFaveColor() {
  return 'Ryan\'s Favorite color is Turquoise';
}

function faveColor(color) {
  console.log('Ryan\'s Favorite color is ' + color);
}

function makeCake(cakeType, fillWith, frostWith) {
  var message = 'I like ' + cakeType + ' cake with ' + fillWith + ' filling and ' + frostWith + ' frosting';
  return message
}


var makeAnotherCake = function (cakeType, frostWith) {
  var message = 'I like ' + cakeType + ' cake with ' + frostWith + ' frosting';
  return message;
}

function askName() {
  var username = prompt('What is your name?');
  return document.write('<h3>' + 'Hello, ' + username + '</h3>');
}

function addGreeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Welcome!';
  }
  return document.write('<h3>' + greeting + '</h3>');
}

function askPreference(){
  var response = prompt('Would you like to buy a house or a hotel?');
var item;

if (response === 'house'){
  item = '<img src="images/house.png">';
} else if (response === 'hotel'){
  item = '<img src="images/hotel.png">'
} else {
  item = '<h3>Ok fine, have a nice day?</h3>'
}

return document.write('<p>' + item + '</p>');
}

// "I like chocolate cake with chocolate ganache filling and fudge frosting"
// makeCake
