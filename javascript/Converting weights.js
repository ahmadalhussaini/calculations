var
myinput1=document.getElementById("input1"),

myinput2=document.getElementById("input2");

myinput1.onkeyup=function(){

    myinput2.value=Math.round( myinput1.value * 2.2046) +" " + "po" ;
}

myinput2.onkeyup=function(){

    myinput1.value=Math.round( myinput2.value / 2.2046 ) +" " + "kg";
}

