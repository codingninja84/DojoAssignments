//If you don't mind, may I have the time?

var hour = 8;
var minute = 15;
var period = "PM";


function timeOfDay(hour, minute, period) {

  if (minute === 30 && period === "AM"){
    console.log("It's half past " + hour + " in the morning");
  } else if (minute === 15 && period === "AM") {
    console.log("It's a quarter after " + hour + " in the morning");
  } else if (minute < 30 && period === "AM"){
    console.log("It's just after " + hour + " in the morning");
  } else if (minute > 30 && period === "AM") {
    console.log("It's almost " + hour + " in the morning");
  } else if (minute === 30 && period === "PM"){
      console.log("It's half past " + hour + " in the evening");
  } else if (minute === 15 && period === "PM") {
    console.log("It's a quarter after " + hour + " in the evening");
  }  else if (minute < 30 && period === "PM") {
    console.log("It's just after " + hour + " in the evening");
  } else if (minute > 30 && period === "PM") {
    console.log("It's almost " + hour + " in the evening");
  }

}

timeOfDay(hour, minute, period);
