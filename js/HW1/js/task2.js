let a = 5;
let b = 7;
console.log('init var a = ' + a)
console.log('init var b = ' + b);
let c = a;
a = b;
b = c;
console.log('changed var a = ' + a);
console.log('changed var b = ' + b);

