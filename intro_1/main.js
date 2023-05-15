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