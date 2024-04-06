var eyeicon=document.getElementById("eyeicon");
var password=document.getElementById("password");

eyeicon.addEventListener('click',()=>{
   if(password.type =="password"){
        password.type="text";
        eyeicon.src="images/eye-open.png";
   }
   else{
    password.type="password";
    eyeicon.src="images/eye-close.png";
   }
})
