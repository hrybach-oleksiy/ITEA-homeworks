// 2. Створити об'єкт Calculator, який має містити методи для розрахунку суми, різниці, добутку та приватного двох чисел. Протестувати цей об'єкт, приймаючи від користувача значення двох операндів та знак операції.Залежно від прийнятого знака операції викликати відповідний метод.;

const calculator = {

    getSum() {
        alert(this.a + this.b);
    },

    getSub() {
        alert(this.a - this.b);
    },

    getMult() {
        alert(this.a * this.b);
    },

    getDiv() {
        alert(this.a / this.b);
    }
};

calculator.a = +prompt('Enter first number');
calculator.b = +prompt('Enter second number');
calculator.sign = prompt('Enter sign');

switch (calculator.sign) {
    case '+':
        calculator.getSum();
        break;
    case '-':
        calculator.getSub();
        break;
    case '*':
        calculator.getMult();
        break;
    case '/':
        calculator.getDiv();
        break;
    default: alert('You entered wrong numbers or sign');
}