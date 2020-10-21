const span = document.querySelector('#value')
const counterValue = span.textContent;

const sum = document.querySelector('[data-action="increment"]');
const minus = document.querySelector('[data-action="decrement"]');

const increment = () => { span.textContent = Number(span.textContent) + 1 };
const decrement = () => span.textContent -= 1;

sum.addEventListener('click', increment);
minus.addEventListener('click', decrement);