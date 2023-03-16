// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // то же, что и во втором
rabbit.__proto__.sayHi(); // то же, что и во втором
