

//1

function getPromise (message, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(message), delay)
    })
}

getPromise('test promise', 2000).then((date) => {console.log(date);})

//2

function calcArrProduct(arr) {
    return new Promise ((resolve, reject) => {
        // let product = 1;
    
        let arr1 = arr.filter(el => typeof el !== 'number')

        if (arr1.length == 0) {
            resolve (arr.reduce((a, b) => a*b))
        } else  {
            reject ('Error! Incorrect array!')  
        }
    })
}


calcArrProduct([1, 3, 5]).then(
    (res) => {console.log(res);}
).catch((error) => {console.log(error);})

//3

    new Promise(function (resolve, reject) {
        let number = +prompt();
        if ( isNaN (number)) {
            reject ('not a number')
            
        } else {
            resolve (number)
        }
        
     }).catch(function (error) {
        return new Promise(function (resolve, reject) {
            let number;
            while (isNaN (number)) {
                 number = +prompt();
            } resolve (number)
        });
     }).then(function (result) {
        console.log(result);
     })

    //4


 let delays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const  delay = (i, time) => new Promise(resolve => setTimeout (() => resolve(i), time));
    // delays.forEach(( i, d) => {
    //     delay(i, 2000).then((data) => console.log(data))
    // })
    
   const delay = (i) => new Promise(resolve => setTimeout(() => resolve(i), 1000 ));
   async function showNumbers() {
    for (let i of delays) {
        console.log(await delay(i, delays[i]));
    }
   }
showNumbers()
    