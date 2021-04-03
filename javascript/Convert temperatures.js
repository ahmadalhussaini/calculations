var
myinput1=document.getElementById("input1"),

myinput2=document.getElementById("input2");

myinput1.onkeyup=function(){

    myinput2.value=Math.round((myinput1.value *1.8) + 32) ;
}

myinput2.onkeyup=function(){

    myinput1.value=Math.round((myinput2.value- 32) * .5556) ;
}

function clean(){

    myinput1.value="";

    myinput2.value="";
}


function swap(){

    var inp=myinput2.value;


    myinput2.value=myinput1.value;

    myinput1.value=inp;

}