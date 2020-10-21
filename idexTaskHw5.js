const area = document.querySelector('#name-input')
const text = document.querySelector('#name-output')
area.addEventListener('input', () => {
    if (area.value === '') {
        text.textContent = 'незнакомец'
    } else {
    text.textContent = area.value
    }
})