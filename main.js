// 2) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
//    Функция наша принимает массив любых элементов. 
//    Например: 
//    const data = [1, 2, 3]; 
//    myFunc(data); // [3, 2, 1]


// let data = [1, 2, 3];
// let data2 = ["Anna", "John", "Mike"]

// let func = (arr) => {
//    return arr.reverse()
// }

// console.log(func(data));
// console.log(func(data2));







// 3) Напишите функцию которая меняет текстовое содержимое элемента.
//    Функция принимает два параметра, идентификатор элемента и текстовку.
//    myFunc('desc', 'Hello world'); //находит элемент с идентификатором desc и
//                                     заменяет текстовку на Hello world 



// let desc = ["Привет как дела?"]

// let func = (newText) => {
//     desc.innerText = newText
// }
// console.log(func("Hello world"));
// console.log(desc);






// 4) Создайте веб-страницу с кнопкой "Изменить текст" и абзацем, содержащим текст "Замените текст". 
// При нажатии на кнопку показывается диалоговое окно prompt, в котором пользователь может ввести новый текст.
// Затем содержимое абзаца заменяется на введенный текст.


// let btn = document.getElementById("btn").onclick = function () {
//     let newText = prompt("Введите новый текст:")
//     document.getElementById('text').innerText = newText
// }