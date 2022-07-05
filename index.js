const person1 = new Object();
let inp = document.getElementById("ism1");


let inp1 = document.getElementById("ism2");


let inp2 = document.getElementById("ism3");


let inp3 = document.getElementById("ism4");

function f1(){
    person1.name = inp.value;
    person1.username = inp1.value; 
    person1.username = inp2.value; 
    person1.username = inp3.value; 
    console.log(person1);
   
}