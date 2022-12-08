const arrLength = +prompt('Enter length of array');
const resultArr = [];

for (let i = 0; i < arrLength; i++) {
    if (i % 2 == 0) {
        resultArr.push(['odd', 'odd', 'odd']);
    } else {
        resultArr.push(['even', 'even', 'even']);
    }

}

console.log(resultArr);

