
// 5 FUNCTIONS FOR A SMART SAFETY TRIP

// Variables

var toll1 = 4;
var toll2 = 6;
var toll3 = 5;
var tollTotal = toll1 + toll2 + toll3;

var paved;
var dirty;

var speed = 150;
var distance = 1000;
var travelTime = Math.floor(distance/speed);
var travelTimeMin = (distance/speed*60);

var gasoline = 1000;
var autonomy = Math.floor(gasoline/distance);

var seatbeltClick = true;

// Functions

function tollCost(toll1, toll2, toll3){
if (tollTotal > 0) {
  console.log ("make sure you bring your wallet, you will need to pay " + tollTotal + "USD in tolls");
} else {
  console.log ("road free of tolls! let's buy a sandwich with your cash!");
}
}

function roadType(roadType) {
if (roadType == "paved") {
  console.log ("you will have and easy drive in paved road");
} if (roadType == "dirty") {
  console.log ("be carefull, the route is a dirty road");
}
}

function getTravelTime(speed, distance){
 if (travelTime === 0) {
console.log ("you will arrive in aprox " + travelTimeMin + " min to your destiny");
  if (150 > travelTime >= 1){
console.log ("you will arrive in aprox " + travelTime + " hr to your destiny");
} if (speed >= 150) {
console.log ("you are going to fast, calm down");
}
}
}

function carAutonomy(gasoline, distance){
  if (gasoline > 200) {
  console.log ("you can drive "+ autonomy + " km until you need to refill");
} if (gasoline < 10) {
  console.log ("your tank is almost empty, find a service station in the next"+ autonomy + " before you start your trip");
}
}

function seatbeltCheck(seatbeltClick) {
if (seatbeltClick === true) {
  console.log ("wau, that seatbelt looks great on you! safety is trendy");
} else {
  console.log ("make sure you put on your seatbelt before you start your trip");
}
}

// Calling the functions.

console.log (tollCost(2, 7, 4));
console.log (roadType("dirty"));
console.log (getTravelTime(180, 60));
console.log (carAutonomy(300, 60));
console.log (seatbeltChek(true));

// It is possible to see that 3 functions are working and 2 no, for example the boolean seatbeltChek function is not working and neither the carAutonomy one.  I'm trying hard to figure out why. I guess I'm learning.
