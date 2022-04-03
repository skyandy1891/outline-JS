// Обьекты (делаем плейлист музыки - тмя, рейтинг, треки,кол-во треков).
//  литерал обьекта.
// свойства ключи (имя) и значение.
// как отключить обьект в области видимости.

// const playlist = {
//     name:'мой плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     b: 5,
//     // два одинаковых свойства быть не может. Будет выведено свойство которое идёт позже:
//     c:10,
//     c:20,
// };
// console.log(playlist)

// ------------------------------------------------
// 1. литерал обьекта всегда стоит справа от = 
// напимер const x = {}; это литерал обьекта!

// 2. при передачи функции например console.log({});

// 3. при возврате...
// const abcd = function() {
//     return {};
// }
// -------------------------------------------------

// Доступ к свойству
// obj.key
// obj['key']
// отсутствие свойства

// const playlist = {

//     name:'мой плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,

// };
// добавляем вручную свойства к обьекту:
// если такого свойства нет, то оно создастся в обьекте
// playlist.qwe = 5;

// если такое свойство есть, то оно перезапишется:
// playlist.rating = 23;


// console.log(playlist)
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount)

// const propertyName = 'tracks';

// console.log(playlist.propertyName); будет undefind
// console.log(playlist[propertyName]); выведет значение переменной 




// короткая запись свойства

// const userName = 'mango';
// const email = 'mango@mail.com';

// const signupData = {
//     слева ключ, справа имя переменной
//     ключ: переменная,
//     name: userName,
//     email: email,
//     если имя ключа и имя переменной совпадают, то можно записать так:
//     userName,
//     email,
// };
// console.log(signupData)


// вычисляемые свойства
// пригодится редко,но надо знать
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue
// };
// console.log(colorPickerData)


// ссылочный тип {} === {}

// const a = { x: 1, y: 2};
// const b = a;

// console.log(b === a)


// =============================================

// массивы и функции это обьекты. 'в js всё обьекты' (А.Репета)

// const a = [1,2,3];
// // пример:
// a.hi = '123';
// в консоли добавится свойство <<hi>> со значением 123.
// console.log(a)

// тоже самое с функцией
// const fn = function() {
//     console.log('hello')
// }
// fn.hello = 'hi';
// console.dir(fn)

// ещё один пример:

// const a = [1,2,3];
// a.push(4);
// console.log(a)

// ========================= МЕТОДЫ =========================
// методы обьекта и this при обращении к свойствам обьекта

// https://gifer.com/ru/AYUm

//  changeName
//  addTrack
//  updateRating
//  getTrackCount
 
// const playlist = {
//     name:'мой плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };


// =========================== hw ===========================

// task 6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.price = 5000;
//     apartment.rating = 4.7;
//     apartment.owner.name = "Henry Sibola";
//     apartment.tags.push("trusted");
//     console.log(apartment);
    // ============ done ============

// task 7
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//     apartment.area = 60;
//     apartment.rooms = 3;
//     apartment.location = {
//         country: "Jamaica",
//         city: "Kingston"
//     }
    // ========== done ==========

// task 8
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };
    
    // ============ done ============

// task 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };
// ============ done ============

// task 10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//     for (let key in apartment) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
    // ============ done ============

    // task 11
    // Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

//     const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//     }
// }
// ============ done ============

    // task 12
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//     let propCount = 0;

//     for (const obj in object) {
//         if (object.hasOwnProperty(obj)) {
//           propCount += 1;
//         }
//       }
//       return propCount;
//   }
// ============ done ============

    // task 13
    // Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

    // const apartment = {
    //     descr: "Spacious apartment in the city center",
    //     rating: 4,
    //     price: 2153,
    //   };
    //   const values = [];
    //   // Change code below this line
    //   const keys = Object.keys(apartment);
    //   for(const key of keys){
    //     values.push(apartment[key])
    //   }
// ============ done ============
    
    // task 14
    // Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

    // function countProps(object) {
    //     // Change code below this line
    //     let propCount = 0;
      
    //     for (const key in object) {
    //       if (object.hasOwnProperty(key)) {
    //         propCount += 1;
    //       }
    //     }
      
    //     return propCount;
    //     // Change code above this line
    //   }
    // ============ done ============   