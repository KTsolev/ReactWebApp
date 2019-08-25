import { required, min, max } from 'data-validations';

const onlyLetters = (value) => { 
    let regex = /^[a-zA-Z\s]|[а-яА-Я\s]+$/;
    return !regex.test(value) ? 'Име трябва да е съставено само от букви!' : null
};

const validEmail = (value) => { 
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !regex.test(value) ? 'Въвели сте не валиден емайл!' : null
};

const formValidations = {
    name: [
        required('Име е задължително поле!'),
        min(2, 'Името трябва да е минимум 2 символа!'),
        max(30, 'Името трябва да е максимум 30 символа!'),
        onlyLetters
    ],
    email: [
        required('Имейлът е задължително поле!'),
        min(2, 'Имейлът трябва да е минимум 2 символа!'),
        max(20, 'Имеилът трябва да е максимум 20 символа!'),
        validEmail
    ],
    subject: [
        min(2, 'Тема трябва да е минимум 2 символа!'),
        max(60, 'Тема трябва да е максимум 60 символа!'),
    ],
    message:[
        required('Съобщение е задължително поле!'),
        min(2, 'Съобщение трябва да е минимум 2 символа!'),
    ]
}

export default formValidations;