import { required, min } from 'data-validations';

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
        min(2, 'Име трябва да е минимум 2 символа!'),
        onlyLetters
    ],
    email: [
        required('Име е задължително поле!'),
        min(2, 'Име трябва да е минимум 2 символа!'),
        validEmail
    ],
    subject: [
        required('Тема е задължително поле!'),
        min(2, 'Тема трябва да е минимум 2 символа!'),
    ],
    message:[
        required('Съобщение е задължително поле!'),
        min(2, 'Съобщение трябва да е минимум 2 символа!'),
    ]
}

export default formValidations;