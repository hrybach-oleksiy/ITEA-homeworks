// 5. Для попереднього завдання створіть функцію, яка прийматиме масив об'єктів-співробітників, і кожному з об'єктів буде додавати нову властивість "salary", що зберігає зарплату співробітника.
//    Зарплата розраховується, виходячи із значення властивості "occupation" таким чином:
//      • "director" - 3000;
//      • "manager" - 1500;
//      • "programmer" - 2000;
//      • для решти значень – 1000.
//    Після виконання функції – вивести інформацію про співробітників.


const employees = [
    {
        "name": "Alex",
        "sName": "Smith",
        "age": 36,
        "occupation": "manager"
    },
    {
        "name": "Bob",
        "sName": "Tornthon",
        "age": 62,
        "occupation": "director"
    },
    {
        "name": "Jack",
        "sName": "Grealish",
        "age": 27,
        "occupation": "programmer"
    },
    {
        "name": "Pep",
        "sName": "Guardiola",
        "age": 53,
        "occupation": "coach"
    }
];

const addSalary = employees => {
    for (let i = 0; i < employees.length; i++) {
        switch (employees[i].occupation.toLowerCase()) {
            case "director":
                employees[i].salary = 3000;
                break;
            case "manager":
                employees[i].salary = 1500;
                break;
            case "programmer":
                employees[i].salary = 2000;
                break;
            default: employees[i].salary = 1000;
        }
    }
    return employees;
};

addSalary(employees);

console.log(employees);