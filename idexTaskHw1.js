
const refs = {
    body: document.querySelector('body'),
    list: document.querySelector('#categories'),
    items: document.querySelectorAll('.item')
}

console.log(`в списке ${refs.items.length} категорий`);

refs.items.forEach((el) => {
    console.log(el.querySelector('h2').textContent)
    console.log(el.querySelectorAll('ul li').length);
})
