// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit('Кроль');

alert(rabbit.hasOwnProperty('name')); // Ошибка

// при создании class Rabbit extends Object необходимо вызвать super() в конструкторе
// и Rabbit.__proto__ === Object

// при создании просто class Rabbit, Rabbit.__proto__ === Function.prototype
