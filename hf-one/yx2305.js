var boxVolume=function(width,length,height){
 return width*length*height;
};

var weightedScore=function(nubmer){
   weightedScore=1.5*nubmer;
   return weightedScore;
};

var bodyMassIndex=function(weight,height){
  var BMI= weight/height*height;
  return BMI;
};

if(25>bodyMassIndex>18.5){
   alert("Your weight is maintained well!");
}else{
  alert("You need to watch your weight.");
};
