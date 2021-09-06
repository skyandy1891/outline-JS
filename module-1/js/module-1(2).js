
//                              ========== module-1(2) ==========

/*
Напиши скрипт выбора стоимост отеля по кол-ву звёзд
 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 
 Усли в переменной stars что-то кроме 1-5, выведи
 сообщение 'Такого кол-ва звёзд нет'
 */

//  const stars = 1;
//  let price;

//  if(stars === 1) {
//    price = 20;
//  } else if(stars === 2){
//    price = 30;
//  } else if(stars === 3) {
//    price = 50;
//  } else if(stars === 4) {
//    price = 70
//  } else if(stars === 5) {
//    price = 120;
//  } else {
//   console.log('Такого кол-ва звёзд нет')
//  }
//  console.log('price:', price)
// чтобы избавиться от множества else...if
// можно использовать конструкцию
//                        ================ switch ================

// switch(stars) {
//   case 1 : 
//   price = 20
//   break;

//   case 2 : 
//   price = 30;
//   break;
//   case 3 : 
//   price = 50
//   break;
//   case 4 : 
//   price = 70
//   break;
//   case 5 : 
//   price = 120
//   break;
//   default : 
//   console.log('Такого кол-ва звёзд нет')

// }
// console.log(price)

// Напиши скрипт выбора стоимост отеля по кол-ву звёзд
//  1,2 - 20$, 3,4 - 30$, 5 - 120$

//  const stars = 6;
//  let price;

//  if(stars === 1 || stars === 2) {
//    price = 20;
//  } else if(stars === 3 || stars === 4){
//    price = 30;
//  }  else if(stars === 5) {
//    price = 120;
//  } else {
//   console.log('Такого кол-ва звёзд нет')
//  }
//  console.log('price:', price)

// перепишем это на switch
// если 1 ИЛИ 2 то price = 20 и т.д.
// так группируют кейсы с одинаковыми значениями

//  switch(stars) {
//   case 1 : 
//   case 2 :
//   price = 20
//   break;

//   case 3 : 
//   case 4 :
//   price = 30
//   break;
  
//   case 5 : 
//   price = 120
//   break;
//   default : 
//   console.log('Такого кол-ва звёзд нет')

// }
// console.log(price)


// ========== задача ============

/*
напиши скрипт выбора опции доставки товара опции хранятся в переменной option:
1 - самовывоз, 2 - курьер, 3 - почта.

в переменную message записать сообщение в зависимости от опции.
- 'вы можете забрать товар завтра в нашем офисе'
- 'курьер доставит заказ завтра с 9:00 до 18:00'
- 'посылка будет отправлена сегодня'
- 'вам перезвонит менеджер'
*/

// пишем алгоритм действий

// 1. сделать переменные

// const option = 2;
// let message = '';

// 2. сделать switch 1 2 3.
// 3. в каждом кейсе записать в message строку

// switch(option) {
//   case 1:
//     message = 'вы можете забрать товар завтра в нашем офисе';
//     break;
//   case 2:
//     message = 'курьер доставит заказ завтра с 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'посылка будет отправлена сегодня';
//     break;

//     default: 
//     message = 'вам перезвонит менеджер'  
// }

// 4. сделать лог message

// console.log(message)


//                    ================= цикл for ====================

// for(инициализация; условие; пост-выражение) {
//   // тело цикла;
// }
// цикл позволяет повторять один и тот же кусочек кода
// цикл состоит из повторений

// for(let i = 5; i <= 10; i += 1) {
//   console.log(i)
// }

// for(let i = 20; i >= 10; i -= 1) {
//   console.log(i)
// }

// for(let i = 510; i >= 500; i -= 1) {
//   console.log(i)
// }

// for(let i = 100; i >= 80; i -= 2) {
//     console.log(i)
// }

//  *** i += 1 *** это тоже самое что *** i = i + 1 ***



// ======================== задачка =====================

/*
Напиши скрипт котоый подсчитывает общую сумму ЗП работников.
Кол-во работников хранится в переменной employees.
ЗП каждого работника это случайное число от 500 до 5000.
Записать сумму в переменную totalSalary и вывести в консоль.
*/

// // 1. сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;

// // 2. перебрать работников в цикле
// for(let i = 1; i <= employees; i += 1 ) {

// // 3. сгенерить случайную зп
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     )

// // выводим результат в консоль
//     console.log(`Зп работника номер ${i} = ${salary}`)

//     // прибавить к total
//     totalSalary += salary;
// }
// // 4. сделать лог
// console.log('totalSalary' , totalSalary)


// ======================== задачка =====================


/*
Напиши скрипт котрый подсчитывает сумму всех чётных чисел,
которые входят в диапазон чисел в переменных от min до max.
Например если min=0 и max=5, то диапазон от 0 до 5,
 и в нём два чётных числа 2 и 4, сумма которых равна 6*/

//  1. сделать переменные
// const min = 0;
// const max = 5;
// let total = 0;

// // остаток от деления!:
// // например 10 % 3 (3 входит в 10 три раза, остаток 1)
// // console.log(10%4), остаток 2 и т.д.

// // 2. for от min до max с шагом 1

// for(let i = min; i <= max; i += 1) {
//     // console.log(i)
//     // проверяем остаток от деления
//     // логика "от обратного"
//  if(i % 2 !== 0) {
//     console.log('Не чётное', i);
//     continue;
//  }
//  console.log('чётное', i);

//  //  пишем в сумму (сумма всех чётных чисел)
//   total += i;

// //   аналог +=
// // total = total + i
// }

// console.log('сумма всех чётных чисел =', total)



//=============== получаем ссылку на кнопку ===============
// получаем ссылку на наш инпут
// const valueInput = document.querySelector('input[data-value]')


// const btnAdd = document.querySelector('button[data-add]')
// // меняем текст кнопки
// btnAdd.textContent = 'добавить'
// // добавляем слушателя событий
// btnAdd.addEventListener('click', () => {
//     console.log('click here')
//     console.log(valueInput.value)
// })
// // теперь при клике на кнопку в консоль выведется 'click here'
// // console.log(btnAdd)

// const btnFirst = document.querySelector('button[click]')
// btnFirst.textContent = 'отнять'
// btnFirst.addEventListener('click', () => {
//     console.log('click отнять')
//     console.log(valueInput.value)
// })
// // console.log(btnFirst)


