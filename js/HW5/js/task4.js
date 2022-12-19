// 4. Створити масив, який зберігатиме у собі інформацію про співробітників підприємства.Кожен елемент масиву - об'єкт, містить властивості: name, sName, age, occupation, та метод show, який виводить всю інформацію про користувача.
//    Реалізувати заповнення масиву користувачем.Після закінчення заповнення – вивести інформацію про співробітників.;

const employees = [];

let userName = prompt('Enter Name of employee');
let userSurname = prompt('Enter Surname of employee');
let userAge = +prompt('Enter Age of employee');
let userOccupation = prompt('Enter Occupation of employee');
let count = 1;
let isContinue = false;

for (let i = 0; i < count; i++) {
    const newEmployee = {
        name: userName,
        sName: userSurname,
        age: userAge,
        occupation: userOccupation,
        show() {
            alert(
                `
                Name: ${this.name} \n
                 Surname: ${this.sName} \n
                 Age: ${this.age} \n 
                 Occupation: ${this.occupation}
            `);
        }
    };

    employees.push(newEmployee);
    employees[i].show();

    isContinue = confirm('Would you like add another employee?');

    if (isContinue) {
        count++;
        userName = prompt('Enter Name of employee');
        userSurname = prompt('Enter Surname of employee');
        userAge = +prompt('Enter Age of employee');
        userOccupation = prompt('Enter Occupation of employee');
    }
};

console.log(employees);

