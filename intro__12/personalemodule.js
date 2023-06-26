let date =  new Date()
console.log(date);

let time = date.getHours()
 
 
 exports.userName = function (name) {
    
    if (23 <= time  || 5 >= time) {
        return (`good night, ${name}`)
    } else if (5 < time &&  11 >= time){
        return (`good morning, ${name}`)
    } else if (11 < time && 17 >= time) {
        return(`good afternoon, ${name}`)
    }
     else if (17 < time && 23 > time) {
        return(`good evening, ${name}`)
    }
    
}
