

var signupbtn=document.getElementById("signupbtn");
var signinbtn=document.getElementById("signinbtn");
var namefield=document.getElementById("namefield");
var title=document.getElementById("title");

signinbtn.onclick =function(){
    namefield.style.maxHeight="0";
    title.textContent="SignIn";
    signinbtn.classList.remove("disable");
    signupbtn.classList.add("disable");
}

signupbtn.onclick =function(){
    namefield.style.maxHeight="60px";
    title.textContent="SignUp";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}


