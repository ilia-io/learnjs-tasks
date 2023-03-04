// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

// Открыть песочницу с тестами для задачи.

function makeCounter2() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    return (count = value);
  };

  counter.decrease = function () {
    return count--;
  };

  return counter;
} // замыкание

function makeCounter() {
  counter.count = 0;

  function counter() {
    return counter.count++;
  }

  counter.set = function (value) {
    return (counter.count = value);
  };

  counter.decrease = function () {
    return counter.count--;
  };

  return counter;
} // свойство функции

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter.set(333)); // 333
console.log('decrease ' + counter.decrease());
console.log(counter()); // 332
