

function tollCost(toll1, toll2, toll3) {
  var tollTotal = toll1 + toll2 + toll3;
  return tollTotal;
}

function roadType(roadType) {
if (roadType == 'paved') {
  console.log ('you will have and easy drive in paved road');
} if (roadType == 'dirty') {
  console.log ('be carefull, the route is a dirty road');
}
}

function getTravelTime(distance, speed) {
  var travelTime = Math.floor(distance/speed);
  var travelTimeMin = distance/speed*60;
  if (travelTime > 0) {
    console.log ('you will arrive in aprox ' + travelTime + 'hr to your destiny');
  } else if (travelTime === 0) {
  console.log ('you will arrive in aprox ' + travelTimeMin + 'min to your destiny');
}
}

console.log (tollCost (3, 5, 1));
console.log (roadType ('paved'));
console.log (getTravelTime (100, 120));
