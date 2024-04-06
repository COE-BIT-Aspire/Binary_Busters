const passwordBox=document.getElementById("password");
const length=12;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="!@#$%^&*";
const allChars = upperCase + lowerCase + number +symbols;

function CreatePassword(){
    var Password ="";
    Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password+=number[Math.floor(Math.random()*number.length)];
    Password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length > Password.length){
        Password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=Password;
}
forms.addEventListener('click',()=>{
    CreatePassword();
})

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

imgs.addEventListener('click',()=>{
    copyPassword();
})





