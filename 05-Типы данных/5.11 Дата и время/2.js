// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
  const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  const day = date.getDay();

  return weekdays[day];
}

// Например:

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"
console.log(getWeekDay(new Date(0)));
console.log(getWeekDay(new Date()));
