

var 

myinput1=document.getElementById("input1"),

mydiv=document.getElementById("div"),

myselect=document.getElementById("selectt"),

myoption=document.getElementById("option");


myselect.onchange = function(){
 

    mydiv.innerHTML= myinput1.value * myselect.value;

    
}