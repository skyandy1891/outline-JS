// ============== функции ==============

// функция это мясорубка, в которую нужно что-то положить и затем вызвать

// обьявляем функцию, котоая находится в переменной
// в круглые скобки передаются параметры, которые будут выполняться во время вызова функции
// const add = function(a,b) {
//     console.log(a)
//     console.log(b)
//     // console.log() выполнится только после вызова этой функции
// //return это возврат результата из функции 
//     return a+b;
// }
// // вызываем функцию
// // она выполнится столько раз, сколько мы её вызвали
// const r1 = add(2, 4)
// console.log('r1:', r1)

// const r2 = add(4, 5)
// console.log('r2:', r2)

// const r3 = add(34, 54)
// console.log('r3:', r3)

// =================================================

// const fn = function (value) {
//     console.log(1);
//     console.log(2);
     
//     if(value < 50) {
//         return 'меньше 50'
//     } 
//         return 'больше 50'
// пустой return вернёт undefined (который приводится к false)
// дойдя до return функция прекращает выполняться
// }
// console.log('результат функции:',fn(10))
// console.log('результат функции:',fn(1000))

// ====================================================
// Стек вызовов
// Stack trace и поиск ошибок

// const fnA = function () {
//     console.log('выполняется функция А')
//     fnB()
// }

// const fnB = function () {
//     console.log('выполняется функция Б')
//     fnC()
// }

// const fnC = function () {
//     console.log('выполняется функция С')

//     console.log(value);
// }

// console.log('перед вызовом функции А')
// fnA()
// console.log('после вызова функции А')

// console.log('перед вызовом функции Б')
// fnB()
// console.log('после вызова функции Б')

// console.log('перед вызовом функции С')
// fnC()
// console.log('после вызова функции С')

// ======================================================

// напиши функцию calculateTotalPrice(items)
// которая принимает массив чисел(цен) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90]
// let total = 0;

// for(const value of cart) { 
//     total += value;
// }
// console.log('total:', total)

// пишем функцию:
// const calculateTotalPrice = function(items) {
//     console.log('items внутри функции:',items)

//     let total = 0;
//     for(const item of items) {
//         total += item;
//     }
//     return total;
// }
// const result1 = calculateTotalPrice([1, 2, 3]);
// console.log(`общая сумма = ${result1}`);

// const result2 = calculateTotalPrice([5, 10, 15, 20]);
// console.log(`общая сумма = ${result2}`);

// const result3 = calculateTotalPrice([100, 200, 300]);
// console.log(`общая сумма = ${result3}`)

// =============================================================

// напиши функцию logItems(items) для перебора и логирования массива
// эта функция ничего не возвращает, просто логирует массив

// const logItems = function(items) {
//     for(const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура','наушники','часы']);

// =================== Задача ===========================

// напиш функцию findLogin(allLogins, login) для поиска логина
// если логина нет, вывести сообщение 'пользователь (login) не найден'
// если нашли логин, вывести сообщение 'пользователь (login) найден'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
   
//    for(const login of allLogins) {
//        if(login === loginToFind) {
//         return `пользователь ${loginToFind} найден`
//        } 
//    }
//   return`пользователь ${loginToFind} не найден`;
// }

// теперь делаем через тернарник:

// const findLogin = function (allLogins, loginToFind) {
//    return logins.includes(loginToFind)
//        ? `пользователь ${loginToFind} найден`
//        : `пользователь ${loginToFind} не найден`;
  
// }

// console.log(findLogin(logins, 'avocod3r'))
// console.log(findLogin(logins, 'k1widab3st'))
// console.log(findLogin(logins, 'jam4l'))
// console.log(findLogin(logins, 'poly1scute'))

// ===================== Задача ===========================
// напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа в массиве.
// при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for(const number of numbers) {
//     if(number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber:', smallestNumber)

// const findSmallestNumber = function(numbers) {
//     let smallestNumber = numbers[0]; 
//     for(const number of numbers) {
//         if(number < smallestNumber) {
//             smallestNumber = number;
//         }
        
//     } return smallestNumber;
// }
// console.log(findSmallestNumber([3, 8, 12, -2, 15]))
// console.log(findSmallestNumber([100, 54, 8, 12, 47]))
// console.log(findSmallestNumber([7, 21, 84, 15, 4]))
// console.log(findSmallestNumber([100, 200, 1, 400]))

// ============== Задача ================

// напиши функцию changeCase(srting) которая заменяет регистр каждого символа в строке на противоположный.
// например если строка 'JavaScript' то на выходе должно получится 'jAVAsCRIPT'

// const string = 'qWeRTzxCv';
// const letters = string.split('');
// let invertedString = '';
// for(const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

//     invertString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertString :', invertString)

// const changeCase = function(string) {
//     const letters = string.split('');
//      let invertedString = '';

//    for(const letter of letters) {
//     const isInLowrCase = letter === letter.toLowerCase();

//     invertedString += isInLowrCase 
//     ? letter.toUpperCase() 
//     : letter.toLowerCase();
// }
    
//    return invertedString;
// }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

//================ Задача ==================
// напиши функцию slugify(string) которая получает строку и возвращает url-slug .
// строка состоит только из букв и пробелов.

// const title = 'Top 10 benefits of React framework';
// // приводим к нижнему регистру
// const normalizeTitle = title.toLowerCase();
// // разбиваем слова по пробелу
// const words = normalizeTitle.split(' ')
// // сшиваем слова по тире
// const slug = words.join('-')

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug)
// console.log(slug1)

// пишем функцию...

// const slugify = function (string) {

// const normalizeTitle = string.toLowerCase();
// const words = normalizeTitle.split(' ')
// const slug = words.join('-')
//    return slug;
 
// или сделать ещё проще...
//   return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('hAvE a NicE DAy'))
// console.log(slugify('JAva scRIpt is mY liFe'))



//            ======!!!======= ПСЕВДОМАССИВ (arguments) ======!!!=======



// псевдомассив arguments и Array.from и...
// const fn = function() {
//     console.log(arguments);

// // преобразование псевдомассива в настоящий массив...
//     const newArguments = Array.from(arguments);
//     console.log(newArguments)

// }

// fn(1,2,3);
// fn(1,2,3,4,5);
// fn(1,2,3,4,5,6,7);
// ======================================================


// второй способ более современный...

// ()...args) это тоже самое что Array.from(arguments)

// ====================(...args) собирает все элементы в массив===============

// const fn = function(a, b, ...args) {
//    console.log(`${a} ${b}`)
//     console.log(args)

// }

// fn('sedsef',1,2,3);
// fn('ghbfgn',1,2,3,4,5);
// fn('df',1,2,3,4,5,6,7);

// ========================== Задача =============================

// напиши функцию add() для сложения произвольного кол-ва аргументов (чисел)
// операция ... (rest)

// const add = function (...args) {
//     console.log(args);

//     let total = 0;
//     for(const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(1,2,3));
// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7));


// ======================= Задача =========================
// напиши функцию filterNumbers(array [, number1, ...]) которая:
// первым аргументом принимает массив чисел
// после первого аргумента может быть произвольное кол-во других аргументов, которые будут числами.
// функция должна вернуть новый массив, в котором будут только те аргкменты, начиная со второго, для которых есть аналог в оригинальном массиве

// const filterNumbers = function(array, ...args) {
//     console.log('array:', array);
//     console.log('args:', args);
//     const uniqueElements = [];


//     for(const element of array) {

//         if(args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} есть везде`)
//         }
//     }
//     return uniqueElements;
// }

// console.log(filterNumbers([1,2,3,4,5],10,15,2,3,8));
// console.log(filterNumbers([10,15,25,30],23,30,18,15));
// console.log(filterNumbers([100,200,300,400,500],7,12,200,64))

// =======================================================================