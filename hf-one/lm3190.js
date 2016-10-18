var makePizza = function (size, topping1, topping2)
{
console.log("Making" + size + topping1 + topping2 + "pizza");
};

makePizza("large", "mushroom", "pepperoni");



function snackTime (Timeofday){
  if (timeofday > 12) {
  console.log("What's on the menu?");
}
else if (timeofday < 12) {
  console.log("Have you had breakfast?");
}
}
snackTime(2);
snackTime(11);
snackTime(18);

Function classSchedule (day) {
if ("monday" || "Tuesday" || "Wednesday" || "Thursday") {
console.log ("Classes Scheduled");
else {
console.log("Yippie! no class");
}

classSchedule (Sunday);
classSchedule (Monday);
classSchedule (Tuesday)
