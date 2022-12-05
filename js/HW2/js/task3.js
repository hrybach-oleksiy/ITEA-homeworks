const userNumber1 = +prompt('Enter first number');
const userNumber2 = +prompt('Enter second number');
const userNumber3 = +prompt('Enter third number');

let maxNum = userNumber1;

if (userNumber2 > maxNum) {
    maxNum = userNumber2;
}

if (userNumber3 > maxNum) {
    maxNum = userNumber3;
}

console.log(maxNum);