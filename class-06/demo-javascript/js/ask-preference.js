var response = prompt('Do you prefer dogs, cats, or both?');
var message;

if (response === 'dogs'){
  message = 'I Love Dogs';
} else if (response === 'cats'){
  message = 'Cats are Grrrreat!'
} else if (response === 'both'){
  message = 'HURRAY!  I like both also!'
} else {
  message = 'Ok, do you like animals?'
}

document.write('<h3>' + message + '</h3>');