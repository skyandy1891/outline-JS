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

// массивы и функции это обьекты. в js всё обьекты

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


