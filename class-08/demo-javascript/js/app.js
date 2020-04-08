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

function getItemType() {
  var response = prompt('Would you like to buy a house or a hotel?');
  var item;

  while (response !== 'house' && response !== 'hotel') {
    response = prompt('PLEASE ANSWER EXACT!  Would you like to purchase house or hotel?')
  }
  if (response === 'house') {
    item = '<img src="images/house.png">';
  } else if (response === 'hotel') {
    item = '<img src="images/hotel.png">'
  }
  return item;
}

function howMany(){
  var count = prompt('Great, how many would you like?');

  while(isNaN(count) || count === ''){
    count = prompt('PLEASE ENTER A NUMBER!  how many would you like?')
  }
  return count;
}

function showOrder(){
  var result = '';

  //get the item type
  var itemType = getItemType(); 

  //find how many they want
  var orderTotal = howMany();

  //create a result with correct number of products
  for (var i = 0; i < orderTotal; i++){
    result = result + '<p>' + itemType + '</p>';
  }

  // send that order to the web page
  return document.write(result);
}




