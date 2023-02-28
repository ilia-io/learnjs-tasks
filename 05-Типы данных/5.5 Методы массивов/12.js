// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
  const result = [];
  arr.forEach((a) => {
    if (result.includes(a)) {
      return;
    }
    result.push(a);
  });

  return result;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
