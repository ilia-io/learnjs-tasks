// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.
const test = {};
function sumSalaries(obj) {
  let result = 0;
  for (let person in obj) {
    result += obj[person];
  }
  return result;
}

const sum = sumSalaries(salaries);
console.log(sum);
console.log(sumSalaries(test));
