const cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Lexus", "Mercedes"];
const userCar = prompt('Enter your car model');
let flag = true;

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === userCar) {
        const newUserCar = prompt('You have already such car. Enter another');
        cars.splice(i + 1, 0, newUserCar);
        flag = false;
        break;
    }
}

if (flag) {
    cars.push(userCar);
}

console.log(cars);

