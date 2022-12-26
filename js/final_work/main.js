
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
const team = {};

const getNames = () => {
    for (let i = 0; i < positions.length; i++) {
        const newEmployee = prompt('Enter the name of new employee');
        employees.push(newEmployee);
    }
};

//Task2
const createTeam = () => {
    for (let i = 0; i < employees.length; i++) {
        team[i + 1] = { name: employees[i], position: positions[i] };
    }
};

//Task3-Task4
const countSalary = (minSalary, maxSalary) => {
    return Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
};

const setSalary = () => {
    const teamValues = Object.values(team);

    for (let i = 0; i < teamValues.length; i++) {
        const position = teamValues[i].position.toLowerCase();

        if (position.indexOf('junior') === 0) {
            teamValues[i].salary = countSalary(500, 1000);
        } else if (position.indexOf('middle') === 0) {
            teamValues[i].salary = countSalary(1500, 2000);
        } else if (position.indexOf('senior') === 0) {
            teamValues[i].salary = countSalary(2500, 3000);
        } else {
            teamValues[i].salary = countSalary(4000, 4500);
        }

        teamValues[i].tellAboutYourSelf = function () {
            console.log(`My name is ${this.name} and I am a ${this.position}. I have a salary ${this.salary}$.`);
        };
    }
};

// getNames();
createTeam();
setSalary();


//Task5
team.showTeam = function () {
    const employees = Object.values(this);
    employees.forEach(employee => {
        if (typeof employee === 'object') {
            console.log(`${employee.name} - ${employee.position}. Salary - ${employee.salary}$.`);
        }
    });
};

team.showTeam();


