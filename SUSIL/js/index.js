'use strict';
const inputRole = document.querySelector('#role');
const buttonRole = document.querySelector('.buttonRole')

buttonRole.addEventListener('click',()=>{
    if(inputRole.value === 'user')
        window.location.href = './../html/loginUser.html';
    if(inputRole.value === 'admin')
        window.location.href = './../html/loginAdmin.html';
})