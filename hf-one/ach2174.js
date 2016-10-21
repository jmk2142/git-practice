function timeUntilChristmas(currentMonth, currentDay){
  var months = 12 - currentMonth;
  var days = 25 - currentDay;
  var daysAfter = 31 - (currentDay - 25);
  if (currentMonth == 12 && currentDay > 25){
    console.log("There are 11 months and " + daysAfter + " days until Christmas!");
  } else if (currentDay > 25){
    console.log("Only " + (months-1) + " months and " + daysAfter + " days until Christmas!");
  } else if (currentMonth == 12 && currentDay == 25){
    console.log("Merry Christmas!");
  } else {
    console.log("Only " + months + " months and " + days + " days until Christmas!");
  }
}
timeUntilChristmas(12, 25);

function polyAngle(sides){
  var angle = ((sides-2)*180)/(sides);
  console.log("In a regular polygon with " + sides + " sides, each angle measures " + angle + " degrees.");
}
polyAngle(5);

function volCube(sidelength){
  var volume = sidelength*sidelength*sidelength;
  console.log("The volume of a cube with sides of " + sidelength + " units is " + volume + " cubic units.");
}
volCube(3);
