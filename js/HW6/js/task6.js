
// sort(function(a, b) { return a > b });
// 1, 2, 3, 5, 10, 14
// 1, 10, 14, 2, 3,


//    6. Для завдання 3 створити метод, що дозволяє відсортувати масив співробітників за однією з властивостей: name, sName, age, occupation, salary.
//    Параметр сортування приймається від користувача.
//    Після виконання функції – вивести інформацію про співробітників.

const employees = [
    {
        "name": "Alex",
        "sName": "Smith",
        "age": 36,
        "occupation": "manager",
        "salary": 1500
    },
    {
        "name": "Bob",
        "sName": "Tornthon",
        "age": 62,
        "occupation": "director",
        "salary": 3000
    },
    {
        "name": "Jack",
        "sName": "Grealish",
        "age": 27,
        "occupation": "programmer",
        "salary": 2000
    },
    {
        "name": "Pep",
        "sName": "Guardiola",
        "age": 53,
        "occupation": "coach",
        "salary": 1000
    }
];


const sortEmployees = (employees, property) => {
    return employees.sort((a, b) => a[property] > b[property] ? 1 : -1);
};

const sortProperty = prompt('Enter property you want to sort by');

sortEmployees(employees, sortProperty?.toLowerCase());

employees.forEach((e) => {
    console.log(`${e.name} ${e.sName} ${e.age} ${e.occupation} ${e.salary}`);
});

