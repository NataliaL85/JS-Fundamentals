
//1

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }


    getLength () {
        return 2 * this.radius * Math.PI;
    }

    static getLengthOfRadius (radius){
        return 2 * radius * Math.PI;
    }
    getCopy() {
        return new Circle(this.x, this.y, this.radius)
    }

    static getObjectCircle (x, y, radius) {
        return new Circle ({x, y}, radius)
    }

    checkPoint (b, c) {
        let distance = Math.sqrt((b - this.x) ** 2 + (c - this.y) ** 2) ;
        return distance <= this.radius;
    }

    toString() {
        return `Circle with radius ${this.radius}`
    }
}

let res = new Circle(5, 5, 20);


//2

let mentor = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web-development',
};

function propsCount (obj) {

 let count = Object.keys(obj);
 return count.length
   
}
console.log(propsCount(mentor));

//3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;  
    }
}

class Student extends Person{
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year; 
    }
    showFullName(midleName){
        return `${this.name} ${this.surname} ${this.midleName}`;
    }
    getCours() {
        let date = new Date().getFullYear();
        return date - this.year + 1;
    }
}

let stud = new Student('Nataliia', 'Babii', 2019);


//4



//5
let workers = [];
class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workers.push(this)
    }

    #experience = 1.2;

    showSalary() {
        return this.dayRate * this.workingDays
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience
    }

    get experience() {
       return this.#experience;
    }

    set experience(value) {
       this.#experience = value;
    }
    getSort(workers) {
        return [...workers].sort((a, b) => a.showSalary() - b.showSalary());
    }
   
}

let worker1 = new Worker('N B', 25, 23);



