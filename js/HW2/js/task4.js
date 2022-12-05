const a = 5;
const b = 15;

let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;

    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log(`Sum of numbers from ${a} to ${b} is ${sum}`);