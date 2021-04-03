var
myinput1=document.getElementById("input1"),

myinput2=document.getElementById("input2"),

myinput3=document.getElementById("input3"),

myinput4=document.getElementById("input4"),

myinput5=document.getElementById("input5");

myinput1.onkeyup=function(){

    myinput2.value=myinput1.value * 0.1 ;

    myinput3.value=myinput1.value * 0.001 ;

    myinput4.value=myinput1.value * 0.000001 ;

    myinput5.value=myinput3.value * 3.281 ;
}

myinput2.onkeyup=function(){

    myinput1.value=myinput2.value * 10 ;

    myinput3.value=myinput2.value * 0.01 ;

    myinput4.value=myinput2.value * 0.00001 ;

    myinput5.value=myinput3.value * 3.281 ;

    

}
myinput3.onkeyup=function(){

    myinput1.value=myinput3.value * 1000 ;

    myinput2.value=myinput3.value * 100 ;

    myinput4.value=myinput3.value * 0.001 ;

    myinput5.value=myinput3.value * 3.281 ;

}
myinput4.onkeyup=function(){

    myinput1.value=myinput4.value * 1000000 ;

    myinput2.value=myinput4.value * 100000 ;

    myinput3.value=myinput4.value * 1000 ;

    myinput5.value=myinput3.value * 3.281 ;

}

myinput5.onkeyup=function(){

    myinput1.value=myinput5.value * 304.8 ;

    myinput2.value=myinput5.value * 30.48 ;

    myinput3.value=myinput5.value * 0.3048;

    myinput4.value=myinput5.value * 0.0003048 ;

}