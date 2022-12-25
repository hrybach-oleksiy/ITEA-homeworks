// 1. Прийняти від користувача імена людей для набору до команди.
//    Імена прийняти та зберегти в новому масиві.
//    Кількість імен має відповідати кількості посад.
//    Масив з посадами - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA',
//    'Middle QA', 'Senior QA', 'Project manager'].

//Task 1
const positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
const employees =
    [
        "John Smith",
        "Bob Tornthon",
        "Mick Jagger",
        "Pep Guardiola",
        "Jose Mourinho",
        "Leonardo Bonucci",
        "Angel Di Maria"
    ];

// for (let i = 0; i < positions.length; i++) {
//     const newEmployee = prompt('Enter the name of new employee');
//     employees.push(newEmployee);
// }

//Task2
const team = {};

for (let i = 0; i < employees.length; i++) {
    team[i + 1] = { name: employees[i], position: positions[i] };
}







