var userform=document.getElementById("form");
var username=document.getElementById("name");
var useremail=document.getElementById("email");
var userpassword=document.getElementById("password");
var usercpassword=document.getElementById("cpassword");

userform.addEventListener('submit',(e)=>{
    if(!validationfun()){
        e.preventDefault();
    }
})


function validationfun(){
    var checkname=username.value.trim();
    var checkemail=useremail.value.trim();
    var checkpassword=userpassword.value.trim();
    var checkcpassword=usercpassword.value.trim();
    var con=true;

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

    if(checkpassword === ''){
        con=false;
        setError(userpassword,'password id is required');
    }
    else if(checkpassword.length < 8){
        con=false;
        setError(userpassword,'password should be greater then 8');
    }
    else{
        setSuccess(userpassword);
    }



    if(checkcpassword === ''){
        con=false;
        setError(usercpassword,'cpassword id is required');
    }
    else if(checkpassword == checkcpassword){
        setSuccess(usercpassword);
    }
    return con;

}

function setError(element,message){
    var findpar=element.parentElement;
    var finderror = findpar.querySelector('.error');
    finderror.textContent=message;
    findpar.classList.add('error');
    findpar.classList.remove('success');

}

function setSuccess(element){
    var findpar=element.parentElement;
    var finderror = findpar.querySelector('.error');
    finderror.textContent=" ";
    findpar.classList.add('success');
    findpar.classList.remove('error');

}