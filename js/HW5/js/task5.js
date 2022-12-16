// 5. Для попереднього завдання створіть функцію, яка прийматиме масив об'єктів-співробітників, і кожному з об'єктів буде додавати нову властивість "salary", що зберігає зарплату співробітника.
//    Зарплата розраховується, виходячи із значення властивості "occupation" таким чином:
//      • "director" - 3000;
//      • "manager" - 1500;
//      • "programmer" - 2000;
//      • для решти значень – 1000.
//    Після виконання функції – вивести інформацію про співробітників.
           
   // sort(function(a, b) { return a > b });
   // 1, 2, 3, 5, 10, 14
   // 1, 10, 14, 2, 3,

const employees = [];

let userName = prompt('Enter Name of employee');
let userSurname = prompt('Enter Surname of employee');
let userAge = prompt('Enter Age of employee');
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
            alert(`\n Name: ${this.name} \n 
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
        age = prompt('Enter Age of employee');
        userOccupation = prompt('Enter Occupation of employee');
    }
};

const addSalary = employees => { 
    const employeesWithSalary = employees;
    for (let i = 0; i < employeesWithSalary.length; i++) { 
        switch (employeesWithSalary[i].occupation.toLowerCase()) { 
            case "director":
                employeesWithSalary[i].salary = 3000;
                break;
            case "manager":
                employeesWithSalary[i].salary = 1500;
                break;
            case "programmer":
                employeesWithSalary[i].salary = 2000;
                break;
            default: employeesWithSalary[i].salary = 1000;
        }
    }
    return employeesWithSalary;
};

addSalary(employees);

console.log(employees);