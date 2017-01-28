var days = 60;

while (days >= 0) {
  if (days > 30) {
    console.log(days + " until my Bday. Such a long time... :(");
  } else if (days <= 30 && days > 5) {
    console.log("My bday is only " + days + " days away!");
  } else if (days <= 5 && days < 0) {
    console.log("MY BDAY IS ONLY " + days + " days away!" );
  } else if (days === 0) {
    console.log("It's my Birthday!!!!");
  }
  days--
}
