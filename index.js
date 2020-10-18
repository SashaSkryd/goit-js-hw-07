// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const refs = {
    body: document.querySelector('body'),
    list: document.querySelector('#categories'),
    items: document.querySelector('.item')
}

console.log([...refs.list.children]);// почему без консоли не работает спред????

[...refs.list.children].filter((el, idx) => {
    idx = idx  + 1
    console.log(`В списке ${idx} категории.`);
    console.log(el.textContent)
})



