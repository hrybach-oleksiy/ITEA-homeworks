
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

//Task3-Task4
const teamValues = Object.values(team);
const getSalary = (minSalary, maxSalary) => {
    return Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
};

for (let i = 0; i < teamValues.length; i++) {
    const position = teamValues[i].position.toLowerCase();
    if (position.indexOf('junior') === 0) {
        teamValues[i].salary = getSalary(500, 1000);
    } else if (position.indexOf('middle') === 0) {
        teamValues[i].salary = getSalary(1500, 2000);
    } else if (position.indexOf('senior') === 0) {
        teamValues[i].salary = getSalary(2500, 3000);
    } else {
        teamValues[i].salary = getSalary(4000, 4500);
    }

    teamValues[i].tellAboutYourSelf = function () {
        console.log(`My name is ${this.name} and I am a ${this.position}. I have a salary ${this.salary}$.`);
    };
}

//Task5
team.showTeam = function () {
    for (let e in this) {
        this[e].tellAboutYourSelf();
    }
};

team.showTeam();



