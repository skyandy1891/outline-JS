// ======callback функции---замыкания---стрелочные функции=======

// const fnA = function(message, callback) {
//     console.log(message);
//     console.log(callback);

//     callback();
// }
// fnA()
// ================ стрелочные функции ===============

// обычная функция:

// function sum(a,b,c) {
//   for(let i = 0; i<= 5; i += 1)
//   console.log(i);
// };
// sum()

//  в стрелочной функции сначала передаются параметры либо пустые скобки, затем стрелка и в фигурных скобках тело функции.

// const myFn = () => {
//   for(let i = 0; i<= 5; i += 1)
//   console.log(i);
// }
// myFn()


// const greet = (a,b,c) => {
//   a = 1;
//   b = 2;
//   c = 3;
//   console.log(a+b-c);
// };
// greet()


//   const arrowAd = (a,b,c) => {
//     alert('click here');
//     console.log('nice')
//   }
// arrowAd()

// ========================callback function:

// Колбэк-функция
// function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// }
// // Колбэк-функция
// function makePizza(pizzaName) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
// }
// // Функция высшего порядка
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

//========================= инлайн колбэк:

// // 1. функция высшего порядка в которую мы передаём callback:
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }
// // 2. передаём инлайн функцию makePizza как callback:
// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // 3. передаём инлайн функцию makePizza как callback:
// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`)
// });