// Finally или просто код?
// важность: 5
// Сравните два фрагмента кода.

// Первый использует finally для выполнения кода после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// } finally {
//   очистить рабочее пространство
// }
// Второй фрагмент просто ставит очистку после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// }

// очистить рабочее пространство
// Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

// Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? Если такое преимущество есть, то дайте пример, когда оно проявляется.



// если нам в любом случае нужна очистка после работы, то стоит использовать
// код с finally. например выход из try произойдет с return или throw, то в коде
// без finally очистки не произойдет, нам такое не подходит
