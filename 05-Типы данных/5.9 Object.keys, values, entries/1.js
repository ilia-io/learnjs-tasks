// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  const arr = Object.values(salaries);
  let result = 0;
  for (let salary of arr) {
    result += salary;
  }
  return result;
}

console.log(sumSalaries(salaries)); // 650
console.log(sumSalaries({})); // 0
