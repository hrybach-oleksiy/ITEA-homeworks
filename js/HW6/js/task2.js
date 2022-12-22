// 2. Допишіть функцію countOnline

let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline(arr) {
    return arr.filter(user => user.online).length;
}
console.log(countOnline(users));
