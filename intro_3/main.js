
//1

const arr = [5, 3, 4, 5, 6, 7, 3];
function compact(arr) {
    return  [...new Set(arr)]
}
const arr2 = compact(arr);
console.log(arr2);

//2

function createArray(start, end) {

    let arr= [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
        
    }
    console.log(arr)
}
createArray(2, 9);

//3


function getArray(a, b) {
    const arr = [];

    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= i; j++) {
            arr.push(i)
        }
        
    } 
    console.log(arr)
}
getArray(1, 5)

//4

function randArray(k) {
    let arr = [];
    for (let i = 0; i <= k; i++) {
        arr.push(Math.floor(Math.random() * 500 + 1));
    }
    return arr
}
console.log(randArray(5))

//5

let arr3 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

newArr = arr3.flat();
console.log(newArr);

let res = [[],[]]
for (let el of newArr) {
    if (typeof el == 'number') {
res[0].push(el)
    }
    if (typeof el == 'string') {
        res[1].push(el)
    }
}
console.log(res);

//6

let date = new Date();

let time = date.getHours()
console.log(time)

if (23 <= time  || 5 >= time) {
    alert('Доброї ночі')
} else if (5 < time &&  11 >= time){
    alert('Доброго ранку')
} else if (11 < time && 17 >= time) {
    alert('Доброго дня')
}
 else if (17 < time && 23 > time) {
    alert('Доброго вечора')
}

switch (true) {
    case 23 <= time  || 5 >= time: 
    alert('Доброї ночі')
        
        break;
    case 5 < time &&  11 >= time: 
    alert('Доброго ранку')
        
        break;
    case 11 <= time  && 17 >= time: 
    alert('Доброго дня')
        
        break;

    case 17 < time && 23 > time:
        alert('Доброго дня')
        break;
}













