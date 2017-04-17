// console.log("hello world !!");

// Increment by 10

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.


for (var i = 5; i < 120; i += 10){
  console.log("current value is ", i);
}

// Decrement by division

// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

// Example output:

// Current value is 4096

// Current value is 2048

// Current value is 1024

for (var i = 4096; i >= 1; i /= 2){
  console.log("current value is ", i);
}


// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson

// var amPresText = "";
var amPres = ["#1 was George Washington", "#2 was John Adams", "#3 was Thomas Jefferson"];
// var pres = ["President #1", "President #2", "President #3"];

for (var i = 0; i < amPres.length; i++){
  console.log("President " +  amPres[i]);
}


// Object iteration

// You can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

// var antSpecies = {
//   argentine: {},
//   army: {},
//   bigHeaded: {},
//   black: {},
//   bull: {},
//   carpenter: {},
//   crazy: {},
//   fire: {},
//   glider: {},
//   honeyPot: {},
//   jackJumper: {}
// }


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
  console.log("antSpecies " + "= " + prop);
}
