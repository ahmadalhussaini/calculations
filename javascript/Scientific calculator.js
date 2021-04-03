
function insert(num){

    document.form.area.value=document.form.area.value+num;

}

function eqaul (){

    var exp=document.form.area.value;

    if(exp){

        document.form.area.value=eval(exp)

    }
}

function clean(){
   
    document.form.area.value="";

}


 function back(){

 var exp=document.form.area.value;

 document.form.area.value=exp.substring(0,exp.length-1);
 }   

 function sinn(){

    var ex1=document.form.area.value;

    if(ex1){

        document.form.area.value=Math.sin(ex1)

    }
} 
function coss(){

    var ex2=document.form.area.value;

    if(ex2){

        document.form.area.value=Math.cos(ex2)

    }
} 
function tann(){

    var ex3=document.form.area.value;

    if(ex3){

        document.form.area.value=Math.tan(ex3)

    }
} 
 
function logg(){

    var ex4=document.form.area.value;

    if(ex4){

        document.form.area.value=Math.log10(ex4)

    }
} 

function sinhh(){

    var ex5=document.form.area.value;

    if(ex5){

        document.form.area.value=Math.sinh(ex5)

    }
} 

function cosshh(){

    var ex6=document.form.area.value;

    if(ex6){

        document.form.area.value=Math.cosh(ex6)

    }
}

function tanhh(){

    var ex7=document.form.area.value;

    if(ex7){

        document.form.area.value=Math.tanh(ex7)

    }
}
function anss(){

    var ex8=document.form.area.value;


        document.form.area.value=ex8+ex8;


}

function po(){

    var ex9=document.form.area.value;

    if(ex9){

        document.form.area.value=Math.pow(ex9,2)

    }
}
function poo(){

    var ex10=document.form.area.value;

    if(ex10){

        document.form.area.value=Math.pow(ex10,3)

    }
}
function factorialize() {

   var ex11=document.form.area.value;

    if (ex11 < 0) 
          return document.form.area.value=-1;
      
    
    else if (ex11 == 0) 
        return document.form.area.value=1;
      
      else {
          return document.form.area.value=(ex11 * factorialize(ex11- 1));
      }
    }

   


    
  