const userNumber1 = +prompt('Enter first number');
const userNumber2 = +prompt('Enter second number');
const userNumber3 = +prompt('Enter third number');

if (userNumber1 === userNumber2 || userNumber1 === userNumber3 || userNumber2 === userNumber3) {
    console.log('Error');
} else {
    const avg = (userNumber1 + userNumber2 + userNumber3) / 3;
    console.log(avg);
}

