const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs1 = {
    root: document.querySelector('body'),
    list: document.createElement('ul'),

}

ingredients.map(text => {
    let item = document.createElement('li')
    item.textContent = text
    refs1.list.append(item)
})