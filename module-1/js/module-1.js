// ``````````````````module 1``````````````````

// const x = 5;
// const y = 10;
// const z = x + y;
// console.log(x)
// console.log(y)
// console.log(z)

/*
* переменные и типы примитивов
* const и let
* логирование с помощью console.log()
* уникальность идентификатора 
*/
// ========== это числа
// const age = 10;
// const totalPrice = 200.74;
// ========== это строки
// const userName = 'Chelsy'
// const message = 'Добро пажаловать';
//======= это були (boolean), зарезервированное значение
// const isOpen = true;
// const shouldConfirm = false;

// ================== const и let ==================

//значение переменной const изменить нельзя!!!
//  выдаст ошибку!!!
// const x = 5;
// x = 10;

// можно менять значение переменной let !!!
// let x = 5;
// x = 10;
// console.log(x)

// ============== window.alert ==============

// как window.alert() блокирует интерпретатор
// console.log('Hello')
// alert('push this button')
// этот console.log() выполнится после того, 
// как ты подтвердишь действие
// console.log('Good bye')

// ================ input ==============

// const message = 'Хотите продлить подписку?';
// const shouldRenew = confirm(message)
// // либо же без переменной передать строку(литерал) в confirm
// console.log(shouldRenew)

// ================ prompt =============

// const quantity = prompt('Введите кол-во товаров');
// console.log(quantity);
// // всегда возвращает строку!!!
// console.log(typeof quantity);

// преобразовываем строку в число!
// вместо const используем let !!!
// let quantity = prompt('Введите кол-во товаров');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// ================================== numbers ===========================

// Number.parseInt()  Парсит из строки целое число

// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// Number.parseFloat() Парсит из строки дробное число

// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// практика_____===============

// Number.parseInt()===
// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth)

// Number.parseFloat()===
// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:',elementHeight)

//Метод число.toFixed(digits) в конспекте нету!!!
// это метод для работы с деньгами
// вызывается на самом числе!

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// преобразовываем строку в число
// salary = Number(salary);
// console.log('salary: ', salary)
// выведет в консоль 1300.16

// упрощённая запись: принцип матрёшки
// интерпретатор читает из глубины!
// 1. отсекает лишние символы в числе
// 2. приводит строку к Number
// выводит в консоль
// ======= пример =======
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// можно записать всё в консоль
// console.log(Number(salary.toFixed(2)))


// приведение к числу с Number(value)
// значение NaN (Not a Number) и метод Number.isNaN(value)

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// true приводится к 1
// console.log('true приведёт к:', Number(true))

// false приводится к 0
// console.log('false приведёт к:',Number(false))

// console.log('не число приведёт к:',Number('qweqwe'))

// console.log(Number(quantity)); выведет число
// console.log(Number(value)); выведет NaN

// ============== обьект Math ==============
// возведение в степень

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);

// Exponent operator ** вместо Mats.pow
// const result = base ** power;

//первое число, это число КОТОРОЕ возводим в степень
//второе число, это В КАКУЮ степень возводим
//здесь получится число 32, то есть 'base' в степени 'power' 
// console.log(result);

// ====== ЗАДАЧА ======

// Напиши скрипт который просит пользователя ввести число и степень
// возводит число в степень и выводит результат в консоль

// пишем алгоритм действий!
// 1 попросить ввести число и сохранить в переменную
// let base = prompt('Давай число')
// base = Number(base);
// console.log(base)

// 2 попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power)

// 3 возвести введённые данные в степень и вывести в консоль
// const result = base ** power;
// console.log(result)


// ===== ГЕНЕРАТОР СЛУЧАЙНЫХ ЧИСЕЛ ===

// генерим слкчайные числа
// - Math.random
// - Math.round()

// генерит случайные числа от 0 до 1
// console.log(Math.random());

// задаём диапазон чисел
// формула генерации случайных чисел!!! Math.random * (max - min) + min;
// const max = 80;
// const min = 50;

// console.log(Math.random() * (max - min) + min);

// округляем число до целого значения

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ================================== strings ===========================
// const message = 'В этой строке 26 символов.';
// console.log(message.length)

// конкатенация строк
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// сшиваем строки и добавляем пробел между ними
// const fullName = firstName + ' ' + lastName;
// const fullName = firstName.concat(lastName);
// console.log(fullName)

// ========= ЗАДАЧА =========
/* напиши скрипт который выведет строку в формате:
 * "Гость x у поселяется в z омер q",
 * подставив вместо значения x y z q значения переменных
 */
// const room = 716;
// const type = 'VIP';

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + 
// ' ' + 'поселяется в' + ' ' + type + ' номер ' + room;
// получили ужасный олдскульный код

// console.log(welcomeMsg)

// удобно писать в шаблонной строке. Например:

// const quantity = 45;
// const orderMsg = `Вы заказали ${quantity} холодильников`;
// console.log(orderMsg)

// пишем правильно с помощью шаблонной строки!
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg)

/* итог: шаблонную строку используем только тогда,
когда нужно подставить какое-то значение!
В противном случае используем обычную строку!
*/

/*
 нормализация с методом toLowerCase()
 */
//  Что ищем ?
// const brand = 'Samsung';
// const normalizedBrend = brand.toLowerCase()
// console.log(normalizedBrend)

// второй вариант
// let brand = 'Samsung';
// brand = brand.toLowerCase()
// console.log(brand)

//как бы вы не вводили имя бренда, оно всегда будет маленькими буквами 
// let brand = prompt('Напиши имя бренда');
// brand = brand.toLowerCase()
// console.log(brand)



/*
поиск строки с методом includes()
*/
// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлогаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная компания #fatlivesmatter';

// //  метод includes() на своё место возвращает true или false
// console.log(string1.includes(blackListedWord1))
// console.log(string1.includes(blackListedWord2))

// console.log(string2.includes(blackListedWord1))
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWord2))

// console.log(string3.includes(blackListedWord1))
// console.log(string3.includes(blackListedWord2))

// ==================== операторы сравнения ====================

/* 
операторы сравнения >, <, =, <=, >=,
*/

// console.log(5 < 3)

/*
 Приведение (преобразование) типов к числу
 всегда приводит к числу, даже если записать строкой '5'
*/

// console.log('5' > 3)

/*
операторы равенства (== и ===) и неравенства (!= и !==)
всегда используем СТРОГОЕ равенство (===) и НЕРАВЕНСТВО (!==)
*/
// const isEqual = 1 === 1;
// console.log(isEqual)

// ============== логические операторы ===============

/*
приведение к булю на примере конструктора boolean(value)
*/
// в численном преобразовании Null приводится к 0, также как false

/*
Запомните 6 ложных (falsy) значений, приводящихся к false 
 в логическом преобразовании:
 0, NaN, null, undefined, 
 пустая строка: "" или '', false.
 Абсолютно все остальное приводится к true.
  */

// console.log()

/*
логическое И (оператор &&)
 запинается на лжи
 возвращает то, на чём запнулось или последний операнд
*/

// здесь все значения true
// console.log(5 && 6 && 7 && 'hello')

// здесь запинается на false и дальше не проверяет и возвращает false
// console.log(5 && 6 && false && 'hello')


/* логическое ИЛИ (оператор ||)
 запинается на правде
 возвращает то, на чём запнулось или последний операнд
*/

// проверяет и запинается на первом true (вернёт 5)
// console.log(5 || 7 || 8 || 10)

// проверяет и запинается на первом true (вернёт 8)
// console.log(false || NaN || 8 || 10)

/*
 логическое НЕ (оператор !)
 делает инверсию правда > ложь и ложь > правда
 */
//  console.log(!false) выведет true и наоборот (!true) выведет false
//  console.log(!false)

//  приступем к решению задач****************************

/*  
напиши скрипт который проверяет вхождение числа 
в отрезок обозначенный x1 и x2.

До x1
После x2
От x1 до x2
До x1 или после x2
*/

const x1 = 10;
const x2 = 30;
const number = 15;

console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);

console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2);

const res1 = number > x1 && number < x2;
// number > x1 && number < x2
// 50 > 10 && 50 < 30
// trye && false
// запинается на лжи!
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, res1);

const res2 =  number < x1 || number > x2;
// number < x1 || number > x2
// 50 < 10 || 50 > 30
// false || true
// запинается на правде! 

console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}`, res2);