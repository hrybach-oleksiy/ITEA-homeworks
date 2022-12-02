const x1 = prompt('Enter x1 coordinate');
const x2 = prompt('Enter x2 coordinate');
const y1 = prompt('Enter y1 coordinate');
const y2 = prompt('Enter y2 coordinate');
const k = (y1 - y2) / (x1 - x2);
const b = y2 - k * x2;
const result = `y = ${k}x + ${b}`;
console.log(result);