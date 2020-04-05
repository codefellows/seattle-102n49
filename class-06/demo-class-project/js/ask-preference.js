var response = prompt('Do you prefer pickles, or beets?');
var message;

if (response === 'pickles'){
  message = 'I Love Pickles';
} else if (response === 'beets'){
  message = 'Beets are Grrrreat!'
} else {
  message = 'Ok, do you like pickled food?'
}

document.write('<h3>' + message + '</h3>');