//2

console.log('Babii')

//3

let a = 7;
let b = 9;

alert(a);
alert(b);

b = a;
alert(a);
alert(b);

//4

let object = {
   name: 'Nata',
   age: 25,
   isStudent: true,
   undefinedLet: undefined,
   experience: null
}
 //5

 isAdult = confirm('Are you 18 years old?');
 console.log(isAdult);
 
//6

let firstName = 'Nataliia';

let lastName = 'Babii';

let group = "JS_Fundamentals";

let yearBirth = 1985;

let getMarried = false;

console.log(typeof(yearBirth));
console.log(typeof(getMarried));
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(group));

let someVar = null;

let someText;

console.log(typeof(someVar));
console.log(typeof(someText));

//7

let login = prompt('Enter your login');

let email = prompt('Enter your email');

let password = prompt('Enter your password');

alert(`Dear ${login}, your email is ${email}, your password is ${password}`)

//8

let seconds = 1;

let secondsMinut = seconds * 60;
let secondsHour = secondsMinut * 60;

let secondsDay = secondsHour * 24;

let secondsMouth = secondsDay * 30;


alert(`В 1 часе  ${secondsHour} секунд`);
alert(`В сутках  ${secondsDay} секунд`);
alert(`В 1 месяце  ${secondsMouth} секунд`);

//task*

let seat = +prompt('Введіть номер вашого місця');

if (seat % 2 !== 0) {
   alert('У вас нижня полиця!') 
} else {
   alert('У вас верхня полиця!')
} 
if (37 <= seat) {
   alert('Бічне місце')
} else {
   alert('Місце в купе')
}
 
if (1 <= seat && seat <= 4 || seat == 54 || seat == 53) {
   alert('Ваше купе №1')

 } else if (5 <= seat && seat <= 8 || seat == 52 || seat == 51) {
   alert('Ваше купе №2')

 } else if (9 <= seat && seat <= 12 || seat == 50 || seat == 49) {
   alert('Ваше купе №3')

 } else if(13 <= seat && seat <= 16 || seat == 48 || seat == 47) {
   alert('Ваше купе №4')

 } else if (17 <=seat && seat <= 20 || seat == 46 || seat == 45) {
   alert('Ваше купе №5')

 } else if (21 <= seat && seat <= 24 || seat == 44 || seat == 43) {
   alert('Ваше купе №6')

 } else if (25 <= seat && seat <= 28 || seat == 42 || seat == 41) {
   alert('Ваше купе №7')

 } else if (29 <= seat && seat <= 32 || seat == 40 || seat == 39) {
   alert('Ваше купе №8')

 } else if (33 <= seat && seat <= 36 || seat == 38 || seat == 37) {
   alert('Ваше купе №9')
 }

 



