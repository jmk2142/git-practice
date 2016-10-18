//It is not a function. But some conditioanal practice.
var myColor="white";
if (myColor.length===8)
{console.log("I must be wrong!");
}else{
  console.log("I finished my fist practice!");
}

//This is a function imitating the example on P86
function cake (name,price){
  if(price>=10){
    console.log(name+"is a piece of art");
  }else{
    console.log(name+"is just soso");
  }
}
cake("LadyM",15);
cake("paris baaguette",10);
cake("AppleTree",5);


function myFunction(){
	document.getElementById("demo").innerHTML="My first JavaScript function";
}
