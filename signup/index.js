const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');

// REGEX NAME

const NAME_REGEX = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)$/;

let nameValidation = false;

nameInput.addEventListener('input', e =>{
    nameValidation = NAME_REGEX.test(e.target.value);
    const xIcon = nameInput.parentElement.children[1].children[0];
    const checkIcon = nameInput.parentElement.children[1].children[1];
    const information = nameInput.parentElement.parentElement.children[2];
    
    if (nameInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (nameValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!nameValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
//  FIN REGEX NAME


//  Validacion email
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let emailValidation = false;

emailInput.addEventListener('input', e =>{
    emailValidation = EMAIL_REGEX.test(e.target.value);
    const xIcon = emailInput.parentElement.children[1].children[0];
    const checkIcon = emailInput.parentElement.children[1].children[1];
    const information = emailInput.parentElement.parentElement.children[2];
    
    if (emailInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (emailValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!emailValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
//  FIN Validacion email

// Validacion password
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let passwordValidation = false;

passwordInput.addEventListener('input', e =>{
    passwordValidation = PASSWORD_REGEX.test(e.target.value);
    const xIcon = passwordInput.parentElement.children[1].children[0];
    const checkIcon = passwordInput.parentElement.children[1].children[1];
    const information = passwordInput.parentElement.parentElement.children[2];
    
    if (passwordInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (passwordValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!passwordValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
// FIN VALIDACION PASSWORD


// Validacion password correcta
const MATCH_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let matchValidation = false;

matchInput.addEventListener('input', e =>{
    matchValidation = MATCH_REGEX.test(e.target.value);
    const xIcon = matchInput.parentElement.children[1].children[0];
    const checkIcon = matchInput.parentElement.children[1].children[1];
    const information = matchInput.parentElement.parentElement.children[2];

    if (matchInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (matchValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!matchValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
// FIN VALIDACION PASSWORD CORRECTA
