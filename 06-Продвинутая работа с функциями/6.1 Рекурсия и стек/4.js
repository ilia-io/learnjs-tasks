// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

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
// Напишите функцию printList(list), которая выводит элементы списка по одному.

function printListR(list) {
  console.log(list.value);

  if (list.next) {
    printListR(list.next);
  }
}
console.log(printListR(list));

function printListC(list) {
  let copy = list;

  while (copy) {
    console.log(copy.value);
    copy = copy.next;
  }
}

console.log(printListC(list));
// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

// через рекурсию код выглядит более компактно
// производительность лучше через цикл, при большой вложенности
