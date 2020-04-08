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

function askName() {
  var username = prompt('What is your name?');

  return document.write('<h3>' + 'Hello, ' + username + '</h3>');
}

function askPreference() {
  var response = prompt('Do you prefer pickles, or beets?');
  var message;

  if (response === 'pickles') {
    message = 'I Love Pickles';
  } else if (response === 'beets') {
    message = 'Beets are Grrrreat!'
  } else {
    message = 'Ok, do you like pickled food?'
  }

  return document.write('<h3>' + message + '</h3>');
}

//used for demo to load javaSrcipt into browser memory
function logger(){
  console.log('Hello World');
}