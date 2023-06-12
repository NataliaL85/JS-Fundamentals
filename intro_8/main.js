


//1

function upperCase(string) {
    let res = (/^[A-Z]/).test(string);
    if (res) {
        console.log('String is starts with uppercase character');
    } else {
        console.log('String is not starts with uppercase character');
    }
}
upperCase('regExp')

//2

function checkEmail(string) {
    // let reg = (/^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,4}$/).test(string);
    let reg = (/^[\w-\.]+@[a-z]+\.[a-z]{2,4}$/).test(string);

    if(reg) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkEmail('068305nl@gmail.com')


//3

let str1 = 'My name';
let res = str1.replace(/(\w+)\s(\w+)/, '$2, $1')
console.log(res);

//4

function checkCard (string) {
  let regExp = /^\d{4}[-]\d{4}[-]\d{4}[-]\d{4}$/.test(string);
  return regExp;
}
console.log(checkCard('4556-4875-5856-0000'));

//5
 function checkNewEmail(string) {
        let reg = (/^[A-Za-z0-9]+[\w\-{1}]+@[a-z]+\.[a-z]{2,4}$/).test(string);
    
        if(reg) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    checkNewEmail('nl_06--8305nl@gmail.com')


    //6

function checkLogin(string) {
    let login = (/^[A-Za-z]([A-Za-z0-9.]){2,10}/).test(string)

    if(login) {
        console.log(string.match(/\d+\.?\d+/g));
    } else {
        console.log(false);
    }
}
checkLogin('thgf4.2hj52')
