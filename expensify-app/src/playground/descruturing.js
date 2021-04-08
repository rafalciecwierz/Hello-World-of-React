
//  ####OBJECT DESTRUCTURING


const person = {
    name: 'Raf',
    age: 29,
    location: {
        city: 'Poznań',
        temp: 15
    }
};


const { name, age } = person;


// console.log(`${person.name} is ${person.age} old`);


// console.log(`It's ${person.location.temp} in ${person.location.city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published'} = book.publisher;


// console.log(publisherName)   // Penguin, Self-Published



//  ####ARRAY DESTRUCTURING

const adress = ['Wojska Polskiego 123', 'Poznań', 'Wielkopolskie', '21-222'];
const [, city = 'Nowy Jorks', land] = adress;
console.log(`You are in ${city}, ${land}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.79'];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);