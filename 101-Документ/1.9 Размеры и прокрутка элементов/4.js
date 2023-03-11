// В чём отличие CSS-свойств width и clientWidth
// важность: 5
// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.

// 1. clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.

// 2. getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.

// 3. clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
