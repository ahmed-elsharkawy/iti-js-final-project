// ===========================================  Form Section  ===============================================
const userName = document.getElementById("userName");
const userNameAlert = document.getElementById('userNameAlert');
const userEmail = document.getElementById('userEmail');
const userEmailAlert = document.getElementById('userEmailAlert');
const userPhone = document.getElementById('userPhone');
const userPhoneAlert = document.getElementById('userPhoneAlert');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

let userNameValid = false;
let userEmailValid = false;
let userPhoneValid = false;

// --------------------------------  USER NAME VALIDATION ----------------------------------------------
userName.addEventListener('keyup', userNameValidation);
function userNameValidation(){
    let currentValue = userName.value;
    const regex = /^[a-zA-Z ]{3,}$/;
    if(regex.test(currentValue)){
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        userNameAlert.classList.add('d-none');
        userNameValid = true;
    }else{
        userName.classList.remove('is-valid');
        userName.classList.add('is-invalid');
        userNameAlert.classList.remove('d-none');
        userNameValid = false;
    }
    checkAllInputs();
}

// --------------------------------  USER EMAIL VALIDATION ----------------------------------------------
userEmail.addEventListener('keyup', userEmailValidation);
function userEmailValidation(){
    let currentValue = userEmail.value;
    const regex = /^[a-zA-Z0-9]{5,}@[a-zA-Z]{3,}.com$/gm;
    if(regex.test(currentValue)){
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        userEmailAlert.classList.add('d-none');
        userEmailValid = true;
    }else{
        userEmail.classList.remove('is-valid');
        userEmail.classList.add('is-invalid');
        userEmailAlert.classList.remove('d-none');
        userEmailValid = false;
    }
    checkAllInputs();
}

// --------------------------------  USER PHONE VALIDATION ----------------------------------------------
userPhone.addEventListener('keyup', userPhoneValidation);
function userPhoneValidation(){
    let currentValue = userPhone.value;
    const regex = /^01[0125][0-9]{8}$/gm;
    if(regex.test(currentValue)){
        userPhone.classList.remove('is-invalid');
        userPhone.classList.add('is-valid');
        userPhoneAlert.classList.add('d-none');
        userPhoneValid = true;
    }else{
        userPhone.classList.remove('is-valid');
        userPhone.classList.add('is-invalid');
        userPhoneAlert.classList.remove('d-none');
        userPhoneValid = false;
    }
    checkAllInputs();
}

function checkAllInputs(){
    if(userNameValid && userEmailValid && userPhoneValid){
        submit.removeAttribute('disabled')
    }else{
        submit.setAttribute("disabled", "");
    }
}

reset.addEventListener('click', ()=>{location.reload()});