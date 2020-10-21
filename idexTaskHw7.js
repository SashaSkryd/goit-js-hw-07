const control = document.querySelector('#font-size-control')
const text1 = document.querySelector('#text')

const getSize = function  () { text1.style.fontSize = control.value + 'px' };
control.addEventListener('input', getSize);