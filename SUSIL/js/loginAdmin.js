'use strict';

const inputUsername = document.querySelector('.inputUsername');
const inputPassword = document.querySelector('.inputPassword');
const buttonLogin = document.querySelector('.buttonLogin');

buttonLogin.addEventListener('click',(event)=>{
    event.preventDefault();
    const name = inputUsername.value;
    const password = inputPassword.value;
    console.log(name, password)
    if(name === 'admin' && password === 'root'){
        console.log("login")
        window.location.href = './../html/vote.html';
    }
    else console.log("wrong")
})