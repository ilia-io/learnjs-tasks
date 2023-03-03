// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListR(list) {
  if (list.next) {
    printListR(list.next);
  }

  console.log(list.value);
}
console.log(printListR(list));

function printListC(list) {
  let copy = list;
  let arr = [];

  while (copy) {
    arr.push(copy.value);
    copy = copy.next;
  }
  arr.reverse().forEach((el) => console.log(el));
}

console.log(printListC(list));
