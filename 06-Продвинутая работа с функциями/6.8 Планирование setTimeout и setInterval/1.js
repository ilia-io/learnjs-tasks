// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers2(from, to) {
  let counter = from;

  const timerId = setInterval(() => {
    console.log(counter);
    if (counter === to) {
      clearInterval(timerId);
    }
    counter++;
  }, 1000);
}

function printNumbers(from, to) {
  let counter = from;

  setTimeout(function timer() {
    console.log(counter);
    if (counter < to) {
      setTimeout(timer, 1000);
    }
    counter++;
  }, 1000);
}

printNumbers(7, 11);
