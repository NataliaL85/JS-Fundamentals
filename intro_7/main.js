
//1

let newWind =  window.open('', '', 'width = 300, height = 300, left = 500, top = 300');

setTimeout(function () {
    newWind.resizeTo(width=500, height=500);
}, 2000)
setTimeout(function () {
     newWind.moveTo(200, 200)
}, 4000)
setTimeout(function () {
     newWind.close()
}, 6000)


//2

const text = document.querySelector('#text');
console.log(text);
const btn = document.querySelector('.btn')
 function changeCss() {
      text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
 }
 btn.addEventListener('click', changeCss)



//3

const blue = document.querySelector('.blue');
const backgroundPage = document.querySelector('body');
const pink = document.querySelector('.pink');
const brown = document.querySelector('.brown');
const link = document.querySelector('.link');

blue.addEventListener('click', function() {
    backgroundPage.style.backgroundColor = 'blue'
})
pink.addEventListener('dblclick', function() {
    backgroundPage.style.backgroundColor = 'pink'
})
brown.addEventListener('mousedown', function() {
    backgroundPage.style.backgroundColor = 'brown'
})
brown.addEventListener('mouseup', function() {
    backgroundPage.style.backgroundColor = 'white'
})
link.addEventListener('mouseover', function() {
    backgroundPage.style.backgroundColor = 'yellow'
})
link.addEventListener('mouseout', function() {
    backgroundPage.style.backgroundColor = 'white'
})


//4

let del = document.querySelector('.del');
let select = document.querySelector('.mySelect');

del.addEventListener('click', deletSelect)

 function deletSelect() {

select.remove(select.selectedIndex)
}
 
//5

let myBtn = document.querySelector('.myBtn');

myBtn.addEventListener('click', function(){
    let clickMe = document.createElement('div')
    clickMe.textContent = 'I was pressed';
    document.body.append(clickMe)
})
myBtn.addEventListener('mouseover', function(){
    let moveMe = document.createElement('div')
    moveMe.textContent = 'Mouse on me';
    document.body.append(moveMe)
})
myBtn.addEventListener('mouseout', function(){
    let outMe = document.createElement('div')
    outMe.textContent = 'Mouse is not on me!';
    document.body.append(outMe)
})

