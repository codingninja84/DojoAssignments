//For loop

var pennies = 0.01;

for (var days = 1; daysToABillion === undefined; days++) {
  //special case to ensure 0.02 isn't given on the first day
  if (days === 1) {
    continue;
  }
    pennies += pennies;

  if (pennies > 10000 && daysTo10000 === undefined ) {
    var daysTo10000 = days;
  }

  if (pennies > 1000000000 && daysToABillion === undefined ) {
    var daysToABillion = days;
  }
}
console.log("The servant made: $" + pennies + " dollars. It only took " + daysTo10000 + " days to get $10,000.");
console.log("The servant made: $" + pennies + " dollars. It only took " + daysToABillion + " days to get to a billion.");



//While Loop Implementation
days = 1;

while (daysToABillion === undefined) {
  if (days = 1) {
    days++
    continue;
  }

  pennies += pennies;

  if (pennies > 10000 && daysTo10000 === undefined ) {
    var daysTo10000 = days;
  }

  if (pennies > 1000000000 && daysToABillion === undefined) {
    var daysToABillion = days;
  }
  days++
}

console.log("The servant made: $" + pennies + " dollars. It only took " + daysTo10000 + " days to get $10,000.");
console.log("The servant made: $" + pennies + " dollars. It only took " + daysToABillion + " days to get to a billion.");
