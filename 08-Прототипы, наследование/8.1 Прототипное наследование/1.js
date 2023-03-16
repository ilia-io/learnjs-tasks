let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // ? true - собственное

delete rabbit.jumps;

alert(rabbit.jumps); // ? null - унаследованное

delete animal.jumps;

alert(rabbit.jumps); // ? undefined
