const onlyLetters = (value, errorMessage ) => { 
    let regex = /^[a-zA-Z\s]|[-]|[а-яА-Я\s]+\$/;
    return !regex.test(value) ? errorMessage : null;
};
const min = (str, len, errorMessage) => (str.length < len ? errorMessage : null);
const max = (str, len, errorMessage) => (str.length > len ? errorMessage : null);
const required = (str, errorMessage) => (!str && typeof str !== 'string' ? errorMessage : null); 
const validEmail = (value, errorMessage) => { 
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !regex.test(value) ? errorMessage : null;
};

export {
    min,
    max,
    required,
    onlyLetters,
    validEmail,
};;