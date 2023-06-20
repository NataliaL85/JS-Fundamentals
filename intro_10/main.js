

//1

let names1 = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};
let {first: f, third: x, fifth = 'Name №5'} = names1;
console.log(f);
console.log(x);
console.log(fifth);

//2

let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26]
};

let {names:[name1, name2, name3, name4], ages:[age1, age2, age3, age4] } = data

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


//3


x = ['str', 2,  null, false, 3, true]

function mull (...x){

let res =  x.filter(el => typeof el === 'number')

if (res.length >= 1 ) {
 return res.reduce((a, b) => a*b)
} else {
  return 0
}
}
console.log(mull(1, "str", 2, 3, true));


//4

let server = {
  data: 0,
  convertToString: function(callback) {
    callback(() =>{
      return this.data + '';
    })
  }
};
let client = {
  server: server,
  result: '',
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return ((callback) => {
      this.result = callback();
    });
  }

};
client.calc(123);
console.log(client.result);
console.log(typeof client.result);


//5

let keys = [6, 2, 3, 4];
let values = ['div', 'span', 'b', 'i']

function mapBuilder(keys, values) {
  let myMap = new Map()
  for (let i = 0; i < keys.length; i++) {
    // for (let j = 0; j < values.length; j++) {
      myMap.set(keys[i], values[i])
    }
  return myMap
}
let map = mapBuilder(keys, values)
console.log(map);
console.log(map.size);
console.log(map.get(2));

//6

let arr =[];

for (let i = 0; i <= 2; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

arr[1](); 
arr[arr.length - 1]();


