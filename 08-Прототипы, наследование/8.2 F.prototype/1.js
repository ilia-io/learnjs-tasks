// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// console.log(rabbit.eats); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats); // true, свойство изменено после

// …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // false, Объекты присваиваются по ссылке.

// Или такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// console.log(rabbit.eats); // true, delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет

// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined, свойство eats удалено из прототипа
