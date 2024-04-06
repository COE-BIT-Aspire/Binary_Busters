
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let enrollButtons = document.querySelectorAll(".courses .btn");
var learning = document.getElementById('My Learning');
var cont=document.getElementsByClassName('courses .slide');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


  
var swiper =new Swiper(".reviews-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        540:{
            slidePerView:1,
        },
        768: {
            slidePerView: 2,
        },
        1024:{
            slidesPerView:3,
        } 
    }
});




var userform = document.querySelector(".contact form");
var username = document.querySelector(".contact form input[name='name']");
var useremail = document.querySelector(".contact form input[name='email']");
var usernumber = document.querySelector(".contact form input[name='number']");
var usercourse = document.querySelector(".contact form select[name='course']");
var usergender = document.querySelectorAll(".contact form input[name='gender']");

userform.addEventListener('submit', (e) => {
    if (!validationfun()) {
        e.preventDefault();
    }
});

function validationfun() {
    var checkname = username.value.trim();
    var checkemail = useremail.value.trim();
    var checknumber = usernumber.value.trim();
    var checkcourse = usercourse.value;
    var checkgender = false;
    var con = true;

    if(checkname===''){
        con=false;
        setError(username,'user name is required');
    }
    else{
        setSuccess(username);
    }

    if(checkemail===''){
        con=false;
        setError(useremail,'email id is required');
    }else{
        setSuccess(useremail);
    }


    if(checknumber === ''){
        con=false;
        setError(usernumber,'password id is required');
    }
    else if(checknumber.length != 10){
        con=false;
        setError(usernumber,'number should be 10 digit');
    }
    else{
        setSuccess(usernumber);
    }
   
    usergender.forEach(function(genderInput) {
        if (genderInput.checked) {
            checkgender = true;
        }
    });

    
    if (!checkgender) {
        con = false;
        setError(document.querySelector('.contact form .radio'), 'Please select your gender');
    } else {
        setSuccess(document.querySelector('.contact form .radio'));
    }

   
    if (checkcourse === '') {
        con = false;
        setError(usercourse, 'Please select a course');
    } else {
        setSuccess(usercourse);
    }

    return con;
}
    



function setError(element, message) {
    var errorMessage = element.nextElementSibling;
    errorMessage.textContent = message;

}

function setSuccess(element) {
    var successMessage = element.nextElementSibling;
    successMessage.textContent = '';
}
