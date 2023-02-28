// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

function copySorted(arr) {
  const copy = arr.slice();
  return copy.sort((a, b) => a.localeCompare(b));
}

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
