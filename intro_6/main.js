//1
// let one = document.querySelector('#list').firstElementChild.innerHTML;
// let two = document.querySelector('#list').lastElementChild.innerHTML;
// let three = document.querySelector('#list').firstElementChild.nextElementSibling.innerHTML;
// let four = document.querySelector('#list').lastElementChild.previousElementSibling.innerHTML;
// let five = document.querySelector('#list').firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
// alert(`${one},${two},${three},${four},${five}`); 


let one = document.querySelector('#list').children[0].innerHTML;
let two = document.querySelector('#list').children[4].innerHTML;
let three = document.querySelector('#list').children[1].innerHTML;
let four = document.querySelector('#list').children[3].innerHTML;
let five = document.querySelector('#list').children[2].innerHTML;
alert(`${one},${two},${three},${four},${five}`); 

//2

let title = document.querySelector('h1');
title.style.backgroundColor = "green"
console.log(title);
document.querySelector('#myDiv').firstElementChild.nextElementSibling.style.color ="red";
document.querySelector('#myDiv').firstElementChild.style.fontWeight = "bold";
document.querySelector('#myDiv').lastElementChild.style.fontStyle = "italic";
document.querySelector('#myDiv').lastElementChild.previousElementSibling.style.textDecoration = "underline";
document.querySelector('#myList').innerHTML = 'Makemehorizontal!';
document.querySelector('span').style.display = 'none';

//3


let res = document.createElement('main');
res.className = 'mainClass check item';
let div = document.createElement ('div');
div.id = 'myDiv1';
res.append(div);
let text = document.createElement ('p');
text.innerHTML = 'First paragraph';
div.append(text);

document.body.append(res)




