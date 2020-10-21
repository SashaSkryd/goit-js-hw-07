const valid = document.querySelector('#validation-input')
valid.addEventListener('input', () => { 
    if (valid.value.length === +valid.getAttribute('data-length')) {
        valid.classList.add('valid');
        valid.classList.remove('invalid');

    } else {
        valid.classList.remove('valid');
        valid.classList.add('invalid');
    } 
})