
// 5 Functions for a safe and informed roadtrip

var toll1 = 2;
var toll2 = 7;
var toll3 = 4;
var tollTotal = toll1 + toll2 + toll3;

var paved;
var dirty;

var speed = 120;
var distance = 500;
var travelTime = speed/distance;

var gasoline = 220;
var autonomy = gasoline/distance;

var ClickSeatbelt = Boolean('true');



function tollCost(toll1, toll2, toll3){
if (tollTotal > 0) {
  return "make sure you bring your wallet, you will need to pay " + tollTotal + "USD in tools";
} else {
  return "road free of tolls! let's buy a sandwich with the cash!";
}
}

function roadType(roadType) {
if (roadType == "paved"); {
  return "you will have and easy drive in paved road";
} if (roadType == "dirty") {
  return "be carefull, the route is a dirty road";
}
}

function calculeTravelTime(speed, distance){
return "you will arrive in aprox " + travelTime + " hr to your destiny";
} if (speed >= 150) {
return "you are going to fast, calm down";
}

function carAutonomy(gasoline, distance){
  if (gasoline > 200) {
  return "your gasoline tank is full; you can drive "+ autonomy + " km until you need to refill";
} if (gasoline < 10) {
  return "your tank is almost empty, find a service station in the next"+ autonomy + " before you start your trip";
}
}

function seatbeltCheck(ClickSeatbelt) {
if (ClickSeatbelt = 'true') {
  console.log ("wau, that seatbelt looks great on you! safety is trendy");
} else {
  console.log ("make sure you put on your seatbelt before you start your trip");
}
}


console.log (tollCost(2,3,4));
roadType("dirty");
calculeTravelTime(180, 60);
carAutonomy(300, 60);
seatbeltChek(true);
