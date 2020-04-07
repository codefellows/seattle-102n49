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
document.write('<h3>'+ greeting + '</h3>');

// '<h3>' + 'Good Afternoon' + '</h3>'

// assignment operator =

// comparative equals ==

// strict equals ===

// if (true){
//   //do the thing;
// }
 // NaN === "not a number"
// isNaN(variable); returns a boolean, true if NAN, false if number

// prompt('What is your name?');

// var catName = prompt('What is your cat\'s name?');