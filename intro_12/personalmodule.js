
let date = new Date()
console.log(date);

 let time = date.getHours()
export let userName = function (name) {
    
    if (23 <= time  || 5 >= time) {
        return (`Доброї ночі, ${name}`)
    } else if (5 < time &&  11 >= time){
        return (`Доброго ранку, ${name}`)
    } else if (11 < time && 17 >= time) {
        return(`Доброго дня, ${name}`)
    }
     else if (17 < time && 23 > time) {
        return(`Доброго вечора, ${name}`)
    }
    
}