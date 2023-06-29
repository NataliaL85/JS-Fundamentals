// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((date) => date.forEach((el) => {
//     console.log(el.name);
// }))

// let users = document.querySelector('.userBlock');

// async  function res() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
// let date = await response.json();
// date.map (user => {
//     // users.innerHTML += `<li>${user.name}</li>`
//     users.innerHTML += `<p>${user.name}</p>`
// })

// }
//  res()

// async function getUser(){
//     let response = await fetch("./user.json");
//     let data = await response.json();
//     console.log(data);
// }
//  getUser();

//  let newUser = {
//     id: 4,
//     name: 'Nata',
//     age: 30
//  }
//  fetch('./user.json', {
//     method: 'POST',
//     body: JSON.stringify(newUser),
//     headers: {
//         'Content-Type': 'application/json'
//     }
//  })
 

//1


let btn = document.querySelector('.btn');
btn.addEventListener('click', async function(){
    let res = await fetch('./app.json')
    let date = await res.json();
    btn.innerHTML = date
})


//2
let btn1 = document.querySelector('.btn1')
let author = document.querySelector('.names');

btn1.addEventListener('click', async function(){
    let response = await fetch('./books.json')
    let date= await response.json()
    date.map(el => {
        author.innerHTML += `<li>${el.name}</li>`
    })
})

//3

let user = document.querySelector('.user');

async function getRandom(){
    let response = await fetch('https://randomuser.me/api')
    let users = await response.json()
//    console.log(users.results);
   users.results.forEach(el => {
     
   let date = Object.values(el);
   console.log(date);
   let [f,{first, last},{city, country},s]= date;
   console.log(f);
   console.log(first, last);
   console.log(city);
   console.log(country);
   console.log(s);
   
    
 });
   
 
   
}

let date =  getRandom();

