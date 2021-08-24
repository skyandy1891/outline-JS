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
const age = 10;
const totalPrice = 200.74;
// ========== это строки
const userName = 'Chelsy'
const message = 'Добро пажаловать';
//======= это були (boolean), зарезервированное значение
const isOpen = true;
const shouldConfirm = false;

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