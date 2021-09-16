                  //==================== массивы =====================

// массив это список, или коллекция однотипных данных.
// массив это набор ячеек в памяти
// const friends = ['mango', 'kiwi', 'poly', 'ajax'];

// удобная команда для массивов console.table()
// console.table(friends)
   //изменяем значение эл-тов массива    
// friends[1] = 456;
// friends[2] = '123';
// console.log(friends)

// =====================================================================

                             // примитивы и сложные типы

     // ===== примитивы

// передача по значению
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b)

// a = 20;
// console.log(a);
// console.log(b)

     // ===== сложные типы

// передача по ссылке
// const a = [1,2,3];
// const b = a;
// console.log(a);
// console.log(b)

// a[0] = 500;
// console.log(a);
// console.log(b)

// console.log(a===b)
// // будет true

// // два массива никогда не равны друг другу, даже если
// // их элементы полностью одинаковые
// console.log([1,2,3] === [1,2,3])
// // будет false

// =====================================================================

               // ================== цикл for ==================

// for ([начало]; [условие]; [шаг]) выражения

// const friends = ['mango', 'kiwi', 'poly', 'ajax'];
// // определяем индекс послед. элемента
// const lastIndex = friends.length - 1;

// перебираем массив по индексам
// for ([начало]; [условие]; [шаг]) выражения
// for(let i = 0; i <= lastIndex; i += 1) {
   
// // ниже пишем обращение к каждому эл-ту массива!!!
//     // console.log(friends[i])

// // добавляем к каждому имени какой-то литерал
//      friends[i] += '-1'
//  или friends[i] += `${i}`;
// }
// console.table(friends)

// =====================================================================

                 // ================== цикл for ==================

// цикл for...of перебирает итерируемые обьекты
// используется если НЕ нужен индекс,
// или если НЕ нужно изменять эл-ты массива
// const friends = ['mango', 'kiwi', 'poly', 'ajax'];

// перебираем массив с помощью for...of
// for(const friend of friends) {

//     // friend += '-1';  не сработает! Потому что *const friend* это 
//     // ЛОКАЛЬНАЯ переменная
//     // console.log(friend)
// }


// ИТОГ !!! если нужно получить доступ к индексу или изменить значение 
// элемента, то испльзуем цикл for !
// в других случая используем for...of !!! это удобнее и меньше синтаксиса

// =====================================================================


// ================ задача ==================
            // решаем с помощью for

// посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];

   // пишем алгоритм для решения задачи!

// 2. сделать переменную total !до цикла!
// let total = 0;

// 1. перебрать массив
// for(let i = 0;i < cart.length;i += 1) {

//     // 3. каждый эл-т приплюсовать к total(это делается внутри цикла)
//     total += cart[i]  ;
//     // console.log(cart[i])

// }
// вывести в консоль результат (total)
// console.log('total:', total)

    // решаем с помощью for...of так как мы 
    //  не меняем значения эл-ов массива
    //  for(const value of cart) {
    //      total += value;
    //  }
    //  console.log('total:', total)



// =============================== задача ===========================

// напиши скрипт который считает общ. сумму всех чётных эл-ов

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]

// пишем алгоритм
// 1. переменная total
// let total = 0;
// 2. перебрать массив
// for(let i = 0; i < numbers.length; i += 1){
// // для лучшей читаемости делаем переменную number
//     const number = numbers[i];
//     // 3. на каждой итерации проверить эл-т на чётность(внутри цикла!!!)
// if(number % 2 === 0) {
//     console.log('чётное!!!')

//     // 4. если чётное, то прибавляем к total
// total += number
// }
//     console.log(number)
// }

// 5. выводим в консоль результат (total)
// console.log('total:' ,total)

// ============= теперь решаем с помощью for...of

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]

// let total = 0;

// for(const number of numbers) {
//    //  console.log(number);

//     if (number % 2 === 0) {
//         console.log(`${number} - чётное`);

//         total += number;
//     }
// }
// console.log('total:', total)


// ======================= задача =========================

// напиши скрипт поиска логина
// если логина нет, вывести сообщение `Пользователь (логин) не найден.`
// если нашли логин, вывести сообщение `Пользователь (логин) найден.`

// сначала через for
// потом через for...of
// Логика break
// метод includes() с тернарным оператором

// const logins = ['mAngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n']
// const loginToFind = 'poly1scute';
// let message =  `Пользователь ${loginToFind} не найден.`;

// в переменную message мы записали дефолтное значение:
// то есть изначально пользователь не найден.
// затем в сравнении если найден, то выводим сообщение 'найден'

// for(let i = 0; i < logins.length; i += 1) {
//    const login = logins[i]

//    console.log('login:', login)
//    console.log(`${login} === ${loginToFind}`, login === loginToFind)

//    if(login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`
//       break;
//    }
     
// }
// console.log(message)

// теперь через for...of

// for(const login of logins) {
//    console.log('login:', login)
//       console.log(`${login} === ${loginToFind}`, login === loginToFind)
   
//       if(login === loginToFind) {
//          message = `Пользователь ${loginToFind} найден.`
//          break;
//       }
// }
// console.log(message)

// теперь с методом icludes()

// const message = logins.includes(loginToFind) 
//    ? `Пользователь ${loginToFind} найден.` 
//    : `Пользователь ${loginToFind} не найден.`;

// console.log(message)

// ======================== ЗАДАЧА ==============================

// напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// // создаём переменную для самого маленького числа
// let smallestNumber = numbers[0];

// // перебираем массив чисел
//    for(const number of numbers) {
// // если попадается число меньше чем smallestNumber, то в smallestNumber перезаписывется новое значение
//       if(number < smallestNumber) {
//          smallestNumber = number;
//       }
//    }
//    // выводим результат в консоль
//    console.log('smallestNumber:', smallestNumber)

// ============================= ЗАДАЧА ===========================
// напиши скрипт который обьединяет все элементы массива в одно строковое значение.
// эл-ов может быть произвольное кол-во.
// пусть эл-ты массива будут разделены запятой.
// сначала через for
// потом через join()

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
// let string = '';

// for(const friend of friends) {
//   string += friend + ',';
// }
// метод slice не подходит, потому что он не изменяет то на чём вызывается. Он возвращает новую копию!
// только если записать в string выражение решения с помощью slice, всё заработает
// string = string.slice(0, -1);
// console.log(string)


// теперь через join()
// join() сшивает массив в строку (можно добавить разделитель)
// const string = friends.join(',')
// console.log(string)

// ====================== ЗАДАЧА НА ЛОГИКУ==================
// напиши скрипт который заменяет регистр каждого символа на противоположный
// например если строка 'JavaScript' то на выходе должно получиться 'jAVAsCRIPT'

// const string = 'JavaScript';
// // метод split берёт строку и разбивает её в массив
// const letters = string.split('')
// let invertedString = '';

// // console.log(letters)

// for(const letter of letters) {
//    // console.log(letter);

//    // if(letter === letter.toLowerCase()) {
//    //    console.log('эта буква в нижнем регистре -', letter)

//    //    invertedString += letter.toUpperCase();
//    // } else {
//    //    console.log('эта буква в верхнем регистре -', letter)

//    //    invertedString += letter.toLowerCase();
//    // }

//    invertedString += 
//    letter === letter.toLowerCase() 
//      ? letter.toUpperCase()
//      : letter.toLowerCase(); 
// }
// console.log(invertedString)


// ====================================================================