// 1.	Створити функцію calculate(a, b, sign), де a та b — два числа, sign — знак арифметичної операції.
// 		Функція повинна розраховувати результат операції, з переданого їй знака.
// 		Функція повинна перевіряти коректність введених чисел та знаку операції (+, -, /, *).
// 		Усі аргументи для функції прийняти від користувача.

const calculate = (a, b, sign) => {
    const correctSigns = ['+', '-', '*', '/'];

    if (isNaN(a) || isNaN(b)) {
        return 'You entered not a number. Try again';
    };

    correctSigns.forEach(elem => {
        if (elem !== sign) {
            return 'You entered wrong sign. Try again';
        };
    });


    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'You entered wrong number or sign';
    }
};


// Task 1 function call

// const userNumber1 = +prompt('Enter your first number');
// const userNumber2 = +prompt('Enter your second number');
// const userSign = prompt('Enter sign', '+, -, *, /');
// const result = calculate(userNumber1, userNumber2, userSign);
// alert(result);

//===================================================================//

// 2. Створити функцію, що зводить число до ступеня, число і сам ступінь вводиться користувачем
// 		Перевірити числа на коректність;

const getPow = (number, pow) => {
    if (isNaN(number) || isNaN(pow)) {
        return 'You entered wrong numbers';
    }

    let result = number;
    for (let i = 1; i < pow; i++) {
        result *= number;
    }

    return result;
};

// Task 2 function call

// const userNumber = +prompt('Enter your number');
// const userPow = +prompt('Enter your pow');
// const result = getPow(userNumber, userPow);
// alert(result);

//==============================================================//

// 3. Допишіть функцію, яка визначить, чи парне число(рішення має бути в один рядок).
// 		Функція має повернути "Even" або "Odd";

// function isEven(num) {
//     // your code here
// }

const isEven = num => num % 2 === 0 ? 'even' : 'odd';

// Task 3 function call

// console.log(isEven(5));
// console.log(isEven(8));


//==============================================================//
// 4. Напишіть функцію, яка повертає n число Фібоначчі.
//     Число, яке має повернути функція, вводить користувач.
// 		Для вирішення використовуйте цикл.

// 		Користувач ввів: 6
// 		Ряд Фібоначчі: 1, 1, 2, 3, 5, 8, 13, ...
// 		Функція має повернути: 8;

const getFibonacciNumber = num => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Task 4 function call
// console.log(getFibonacciNumber(6));

//==============================================================//
// 5. Напишіть функцію яка б перевертала наданий рядок;
// Можливо, вам доведеться перетворити рядок на масив, перш ніж ви можете звернути його.
//         Ваш результат має бути рядком.
//         "something";

// "test" => "tset";

const reverseString = str => str.split('').reverse().join('');

// Task 5 function call
// console.log(reverseString("test"));


//==============================================================//
// 6. Створити гру "Камінь-Ножиці-Папір".
// 		Вибір комп'ютера визначається рядком:;

// var computerChoice = Math.random();
// alert(computerChoice);

// let comp = getComputerChoice();
// let user = getUserChoice();
// function game(comp, user) {

// }

// Math.random() видає довільне число у проміжку від 0 до 1, виходячи з цього можна побудувати принцип вибору рішення комп'ютера.
// 		Запросити у користувача один із трьох варіантів "Камінь-Ножиці-Папір"
// 		Порівняти відповідь користувача та комп'ютера, визначити хто виграв (або нічия)
// 		Запитати користувача, чи хоче він повторити, якщо "так", запустити гру заново;


let computerChoice = Math.floor(Math.random() * 3);

const getComputerChoice = choice => {
    if (choice === 0) return 'rock';
    if (choice === 1) return 'paper';
    if (choice === 2) return 'scissors';
};

const getUserChoice = () => {
    return prompt('Enter "rock", "paper" or "scissors"');
};

let comp = getComputerChoice(computerChoice);
let user = getUserChoice();
let isPlayAgain = false;
let compPoints = 0;
let userPoints = 0;

const game = (comp, user) => {
    let winner = '';

    switch (comp + user) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            winner = 'Computer won';
            compPoints++;
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            winner = 'User won';
            userPoints++;
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            winner = 'tie';
            break;
    }

    alert(winner);
    alert(`Computer points:${compPoints}; User points: ${userPoints}`);

    isPlayAgain = confirm('Would you play again');

    if (!isPlayAgain) {
        alert(`Game over! Computer points:${compPoints}; User points: ${userPoints}`);
    }
};

// Task 6 function call

// game(comp, user);

// while (isPlayAgain) {
//     comp = getComputerChoice(Math.floor(Math.random() * 3));
//     user = getUserChoice();
//     game(comp, user);
// }






