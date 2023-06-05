//4

let btn = document.querySelector('.btn');
let d =[... document.querySelectorAll('.arr')];

function print (){
    let array = [];
   
     for (let i = 0; i < d.length; i++) {  
        // array[i]= d[i].placeholder;
        // array.push(d[i].placeholder);   
        array.push(d[i].value);   
     }
    
     let out = document.querySelector('.out').innerHTML = [array];
}

 btn.addEventListener('click', print)


//5

let circle =[... document.querySelectorAll('.circle')];
console.log(circle);

let res =  circle.map ((elem) =>{
    let data =  elem.getAttribute('data-anim');
    elem.classList = data;
    return elem;
}
)
console.log(res);

//6





