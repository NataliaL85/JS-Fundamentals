//1

let a = 5;
let b = 7;
let c = 9;

console.log(a < b && b < c);

//2

let x = 1;
let y = 2;

let res1 = String (x) + String (y);

console.log(res1);
console.log(typeof res1);

let res2 = Boolean (x) + String(y);

console.log(res2);
console.log(typeof res2);


let res3 = Boolean(x + y);

console.log(res3);
console.log(typeof res3);

let res4 = parseInt('x + y');

console.log(res4);
console.log(typeof res4);

//3

let isAdult = +prompt('Скільки вам років?');

if (isAdult < 18) {
    alert('Ви ще занадто молоді!')
} else {
    alert('Ви досягли повнолітнього віку!')
}

//4


//5

let d = +prompt('Введіть 1 довжину трикутника');

let k = +prompt('Введіть 1 довжину трикутника');

let j = +prompt('Введіть 1 довжину трикутника');

if (isNaN (d) || isNaN (k) || isNaN (j)) {
    alert('Incorrect data')
} else {
    let p = (d + k + j) / 2;
    let square = Math.sqrt(p*(p - d)*(p - k)*(p - j));
    console.log(square.toFixed(3))
}

if (d**2 + k**2 == j**2 || d**2 + j**2 == k**2 || j**2 + k**2 == d**2 ) {
    console.log('Трикутник прямокутний!')
}

//6

function calc(a, b, op) {
    switch (op) {
        case 1:
            console.log(a - b);
            break;
        case 2:
            console.log(a * b);
            break;
        case 3:
            console.log(a / b);
            break;
    
        default:
            console.log(a + b); 
            break;
    }
}
calc(10, 5, 7)

//7

let arr1 = [1, 2, 3, 6, 10, 4, 5, 8, 9]

function findUnique (arr1) {
    return new Set(arr1).size !== arr1.length;

}
if (findUnique(arr1)) {
    console.log(false)
} else {
    console.log(true)
}
findUnique(arr1)



