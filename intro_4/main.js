//1

let arr = [1, 2, 3, 4, 5, 6];
let first = prompt('Enter first number');
let second = prompt('Enter second number');

 
 try{
    function sumSliceArray(arr, first, second) {

            if (isNaN (first) || isNaN(second)) {
                 throw new TypeError('incorrect input');
                }
             if (first > arr.length || second > arr.length) {
                 throw new RangeError('number greater than array')
                }
            let sum = arr[first] + arr[second];
            return sum
        }
    
    console.log(sumSliceArray(arr, first, second));
 } 
 catch(error) {
 console.log(error.stack)
 }

//2

try{  

    function checkAge() {
        let name = prompt('What is your name?');
        let age = +prompt('How old are you?');
        let status = prompt('Enter your status: administrator, moderator or user?');
        
        let res = '';
        console.log(typeof res);

    if (isNaN (age)) {
         throw new Error('Please enter your age')
        } 

    if ( 70 < age || 18 > age) {
        throw new RangeError('Sorry, you do not fit the age')
        } 
     
    if (name === '' || age === undefined || status === '') {
        throw new TypeError('The field is empty!')
    } 
    
    if (status !== 'administrator' && status !==  'moderator' && status !==  'user') {
        throw new EvalError('Please enter the correct status')
    }    
} 
checkAge();
} 
catch(error) {
        alert(`error: ${error.name}\n${error.message}`) 
}   

//3
let width = prompt('Введіть ширину прямокутника');
let height = prompt('Введіть довжину прямокутника');

function calcRestangleArea (width, height) {
    try{
       
        if (isNaN (width) || isNaN (height)) {
            throw new Error('Некоректні дані')
        }

        let area = width * height
        console.log(area);
    }
    catch (error) {
        console.log(error.stack)
    }
}
calcRestangleArea(width, height)

//4

class MonthException extends Error {
    constructor (message) {
        super(message);
        this.name = 'MonthException';
        this.message = message;
    }
}
let month = prompt('enter a number from 1 to 12') - 1;
let year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];

try{
    function showMonthName(month) {
        if (month >= 12) {
            throw new MonthException('Incorrect month number')
        }
        // return year[Math.floor(month % 12 )] 
        return year[month]
    
       }
      console.log(showMonthName(month)); 
} catch(e) {
    alert(e.message)
}

    
//5

function showUser (id) {
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`)
    }
    return { id };
}
function showUsers(ids) {
    let result = [];

    ids.forEach(function (id) {
        
        try{
            let person = showUser(id);
            result.push(person);
        } catch(e) {
            console.log(e.message);
        }
    });
    console.log(result); 
}
showUsers([7, -12, 44, 22])


