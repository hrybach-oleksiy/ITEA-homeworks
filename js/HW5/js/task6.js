
 // sort(function(a, b) { return a > b });
   // 1, 2, 3, 5, 10, 14
   // 1, 10, 14, 2, 3,


//    6. Для завдання 3 створити метод, що дозволяє відсортувати масив співробітників за однією з властивостей: name, sName, age, occupation, salary.
//    Параметр сортування приймається від користувача.
//    Після виконання функції – вивести інформацію про співробітників.

const sortEmployees = (employees, sortProperty) => { 
    let property;
    for (let i = 0; i < employees.lenght; i++) { 
        property = employees[i].sortProperty;
    }
};