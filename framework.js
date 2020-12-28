// ------------------ NavBar 1 ------------------ 
var div2=document.getElementById("content-Z");
var div3=document.getElementById("content-Hallow");
var div4=document.getElementById("content-king");
var div1=document.getElementById("content-daw");
var btn1=document.getElementById("daw-btn");
var btn2=document.getElementById("Z-btn");
var btn3=document.getElementById("Hallow-btn");
var btn4=document.getElementById("king-btn");

//External Conditions
function checkBtn(div){
    if(div.style.display=='block'){
        btn1.style.backgroundColor='rgba(255, 255, 255, 0.452)';
    }else{
        btn1.style.backgroundColor=''
    }
}
//Calling Functions
function displayOnlyDaw(){
    div1.style.display='block';
    if(div1.style.display=='block'){
        btn1.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn1.style.backgroundColor='rgba(255,255,255,0)';
    }
    div2.style.display='none';
    div3.style.display='none';
    div4.style.display='none';
}
function displayOnlyZ(){
    div2.style.display='block';
    if(div2.style.display=='block'){
        btn2.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div3.style.display='none';
    div4.style.display='none';
}
function displayOnlyHallow(){
    div3.style.display='block';
    if(div3.style.display=='block'){
        btn3.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div2.style.display='none';
    div4.style.display='none';
}
function displayOnlyKing(){
    div4.style.display='block';
    if(div4.style.display=='block'){
        btn4.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div2.style.display='none';
    div3.style.display='none';
}
// --------------- NavBar 2 -----------------

//Assignin Button Variables
var per1 = document.getElementById("period1"); 
var per2 = document.getElementById("period2");
var per3 = document.getElementById("period3");
var per4 = document.getElementById("period4");
//Assigning Content Variables
var con1 = document.getElementById("Legacy-1");
var con2 = document.getElementById("Legacy-2");
var con3 = document.getElementById("Legacy-3");
var con4 = document.getElementById("Legacy-4");

//function Defining
function displayLeg1(){
    con1.style.display='flex';
    if(con1.style.display='flex'){
        per1.style.backgroundColor='rgb(132, 172, 145)';
        per2.style.backgroundColor='white';
        per3.style.backgroundColor='white';
        per4.style.backgroundColor='white';
    }
    con2.style.display='none';
    con3.style.display='none';
    con4.style.display='none';

    

}

function displayLeg2(){
    con2.style.display='block';
    if(con2.style.display='block'){
        per1.style.backgroundColor='rgb(132, 172, 145)';
        per2.style.backgroundColor='rgb(132, 172, 145)';
        per3.style.backgroundColor='white';
        per4.style.backgroundColor='white';
    }
    con1.style.display='none';
    con3.style.display='none';
    con4.style.display='none';
}

function displayLeg3(){
    con3.style.display='block';
    if(con3.style.display='block'){
        per1.style.backgroundColor='rgb(132, 172, 145)';
        per2.style.backgroundColor='rgb(132, 172, 145)';
        per3.style.backgroundColor='rgb(132, 172, 145)';
        per4.style.backgroundColor='white';
    }
    con1.style.display='none';
    con2.style.display='none';
    con4.style.display='none';
}
function displayLeg4(){
    con4.style.display='block';
    if(con4.style.display='block'){
        per1.style.backgroundColor='rgb(132, 172, 145)';
        per2.style.backgroundColor='rgb(132, 172, 145)';
        per3.style.backgroundColor='rgb(132, 172, 145)';
        per4.style.backgroundColor='rgb(132, 172, 145)';
    }
    con1.style.display='none';
    con2.style.display='none';
    con3.style.display='none';
}