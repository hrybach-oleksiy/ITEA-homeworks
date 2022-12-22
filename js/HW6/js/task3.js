// 3. Використовуйте один метод всередині функції checkPositive, щоб перевірити, чи є будь-який елемент в arr позитивним. Функція має повертати логічне значення.

function checkPositive(arr) {
    return arr.some(num => num > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));