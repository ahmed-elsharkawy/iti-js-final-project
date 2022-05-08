const userName = document.getElementById("userName");
const userNameAlert = document.getElementById('userNameAlert');
const userEmail = document.getElementById('userEmail');
const userEmailAlert = document.getElementById('userEmailAlert');
const userPassword = document.getElementById('userPassword');
const userPasswordAlert = document.getElementById('userPasswordAlert');
const userGender = document.getElementsByName('gender');
const userSports = document.getElementsByName('sports');
const userSportsAlert = document.getElementById('userSportsAlert');
const selectCountry = document.getElementById('country');
const userCountry = document.getElementsByTagName('option');
const userCountryAlert = document.getElementById('userCountryAlert');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

let userNameValid = false;
let userEmailValid = false;
let userPasswordValid = false;
let userGenderValid = false;
let userSportsValid = false;
let userCountryValid = false;


userName.addEventListener('keyup', userNameValidation);
function userNameValidation(){
    let currentValue = userName.value;
    const regex = /^[a-zA-Z ]{4,}$/;
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

userPassword.addEventListener('keyup', userPasswordValidation);
function userPasswordValidation(){
    let currentValue = userPassword.value;
    const regex = /^[a-zA-Z0-9]{5,}$/gm;
    if(regex.test(currentValue)){
        userPassword.classList.remove('is-invalid');
        userPassword.classList.add('is-valid');
        userPasswordAlert.classList.add('d-none');
        userPasswordValid = true;
    }else{
        userPassword.classList.remove('is-valid');
        userPassword.classList.add('is-invalid');
        userPasswordAlert.classList.remove('d-none');
        userPasswordValid = false;
    }
    checkAllInputs();
}

for(let i=0; i<userGender.length; i++){
    userGender[i].addEventListener('click', ()=>{
        userGenderValid = true;
        checkAllInputs(); 
    })
}

for(let i=0; i<userSports.length; i++){
    userSports[i].addEventListener('click', userSportsValidation)
}
function userSportsValidation(){
    let userSportsCounter = 0;
    for(let i=0; i<userSports.length; i++){
        if(userSports[i].checked){
            userSportsCounter ++;
        }
    }
    if(userSportsCounter >= 2){
        userSportsValid = true;
        userSportsAlert.classList.add('d-none');
    }else{
        userSportsValid = false;
        userSportsAlert.classList.remove('d-none');
    }
    checkAllInputs();
}


selectCountry.addEventListener('click', userCountryValidation)
function userCountryValidation(){

    let userCountryState = false;
    for(let i=1; i<userCountry.length; i++){
        if(selectCountry.value == userCountry[i].value){
            userCountryState = true;
        }
    }
    if(userCountryState){
        userCountryValid = true;
        userCountryAlert.classList.add('d-none');
    }else{
        userCountryValid = false;
        userCountryAlert.classList.remove('d-none');
    }
    checkAllInputs();
}

function checkAllInputs(){
    if(userNameValid && userEmailValid && userPasswordValid && userGenderValid && userSportsValid && userCountryValid){
        submit.removeAttribute('disabled')
    }else{
        submit.setAttribute("disabled", "");
    }
}

reset.addEventListener('click', ()=>{location.reload()})