const numberArr = [5, 7, 2, 11, 45, 17];
const stringArr = ['apple', 'orange', 'peach', 'plum', 'melon'];

const reversed = stringArr.reverse();
console.log('reversed:', reversed);

const joined = reversed.join('--');
console.log('joined:', joined);

const splited = joined.split('--');
console.log('splited:', splited);

const concated = numberArr.concat(stringArr);
console.log('concated:', concated);

const sliced = concated.slice(3, concated.length);
console.log('sliced:', sliced);

const spliced = sliced.splice(2, 3, numberArr);
console.log('spliced:', spliced);
console.log('sliced after splice:', sliced);

const sorted = numberArr.sort((a, b) => a - b);
console.log('sorted:', sorted);

const pushed = sorted.push(99);
console.log('pushed length:', pushed);
console.log('pushed:', sorted);

const shifted = sorted.shift();
console.log('shifted elem:', shifted);
console.log('shifted:', sorted);

const ushifted = sorted.unshift(99);
console.log('ushifted length:', ushifted);
console.log('ushifted:', sorted);

const poped = sorted.pop();
console.log('poped elem:', poped);
console.log('poped:', sorted);











