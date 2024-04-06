'use strict';

const headText = document.querySelector('.headText');
const headTextCreate = document.querySelector('.headTextCreate');
const loginInputUsername = document.querySelector('.loginInputUsername');
const loginInputPassword = document.querySelector('.loginInputPassword');
const inputRole = document.querySelector('#role-user');
const buttonLogin = document.querySelector('.buttonLogin');
const createInputUsername = document.querySelector('.createInputUsername');
const createInputPassword = document.querySelector('.createInputPassword');
const createInputPasswordConfirm = document.querySelector('.createInputPasswordConfirm');
const buttonCreate = document.querySelector('.buttonCreate');

let userDatabase = JSON.parse(localStorage.getItem('DB')) || [];

buttonLogin?.addEventListener('click', (event) => {
    event.preventDefault();
    const name = loginInputUsername.value.trim();
    const password = loginInputPassword.value.trim();

    if (!name || !password) {
        headText.textContent = "Please enter both username and password";
        return;
    }

    const user = userDatabase.find(user => user.userName === name && user.password === password);
    if (user) {
            if(inputRole.value === 'normal')
                window.location.href = './../html/vote.html';
            if(inputRole.value === 'disabled')
                window.location.href = './../html/disabled.html';
    } else {
        headText.textContent = "Invalid username or password";
    }
});

buttonCreate?.addEventListener('click', (event) => {
    event.preventDefault();
    const name = createInputUsername.value.trim();
    const password = createInputPassword.value.trim();
    const passwordConfirm = createInputPasswordConfirm.value.trim();

    if (!name || !password || !passwordConfirm) {
        headTextCreate.textContent = "Please fill in all fields";
        return;
    }

    if (password !== passwordConfirm) {
        headTextCreate.textContent = "Password and confirm password do not match";
        return;
    }

    if (userDatabase.some(user => user.userName === name)) {
        headTextCreate.textContent = "Username already exists";
        return;
    }

    // Add new user to the database
    userDatabase.push({ userName: name, password: password });
    localStorage.setItem('DB', JSON.stringify(userDatabase));
    window.location.href = './../html/vote.html';
});