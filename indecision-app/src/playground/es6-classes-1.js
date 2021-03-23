
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, my name is ${this.name}.`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }

}


class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()) description += ` He finished ${this.major}.`
        return description
    }

}


class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let description = super.getGreeting();
        if(this.hasHomeLocation()) description += ` I'm visiting ${this.homeLocation}.`
        return description;
    }
}


const me = new Traveler('Rafał', 30, 'Computer Science');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());