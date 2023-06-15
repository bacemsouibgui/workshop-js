// arrays(store multiple variables in one variable)
let numbers= [1,2,3,4,5];
let fruits= ['apple', 'oranges', 'grapes', 'pears'];
let hobbies= ['sleep', 33, true];

console.log(numbers);
console.log(typeof(numbers));
console.log(fruits);
console.log(typeof('sleep'));

// objects literals
/*const Personne={
 name: "Eve",
 age: 24,
 isPerson: true,
 hobbies: ['eating', 'sleeping']
};
console.log(Personne)

// functions
function testFunc() {
    
}
// check type
console.log(typeof(testFunc))

// string concatenation
// archaic method
let name= "steve"
let age= 26

console.log('My name is '+ name + ' and I am ' + age);

// template literal 
console.log(`My name is ${name} and I am ${age}`);
// strings methods and propreties
var s = "Hello World";
let val;
val= s.length
console.log(val);
console.log(s);
// string index
console.log(s[4]);
// change case
news= s.toUpperCase();
console.log(news);
newss= s.toLowerCase();
console.log(newss);

/* get sub string
val= s.substring(0,5)
console.log(val)
console.log(s.substring(3,9));
val= s.split('');
console.log(val)
console.log(typeof(val))
console.log(typeof(s))

val= val.join('+')
console.log(val)

//arrays methods
const colors=['black', 'red', 'white', 'blue'];
console.log(colors);
console.log(typeof(colors))
console.log(typeof('red'));

//console.log(colors[1]);
// add a value in the end of the array
//colors.push('yellow');
//console.log(colors)

// add a value in the beggining of the array
//colors.unshift('purple');
//console.log(colors)

// remove first element
colors.shift();
//console.log(colors);

//remove last element
colors.pop();
//console.log(colors);

// check if it is an array
console.log(Array.isArray(colors));
console.log(Array.isArray(s));

// get the index of an element
console.log(colors.indexOf('black'));
console.log(colors.indexOf('ffffff')); //-1

// arithmetic operator
// + - * / % ++ _ _ **..
console.log(13%2)
console.log ('3'+'2');
console.log ('3'*'2');

console.log(typeof('3'*'2'))

console.log(4**3);
console.log('5'+3);

let y=3;
console.log(++y);
console.log(--y)

//objects
const person ={
   
    firstName: 'Adam',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: "22 street",
        city: 'california',
        state: 'USA'
    }
};

console.log(person);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);

// add proprety
person.email= 'adam@gmail.com';
console.log(person);
person.hobbies.push('singing')
console.log(person);
person.firstName= 'jack';
console.log(person);*/

// array of objects
const users=[
    {
        name: 'person1',
        age: 23,
        email: "p1@gmail.com",
    },
    {
        name: 'person2',
        age: 26,
        email: 'p2@gmail.com'
    },
    {
        name: "person3",
        age: 24,
        email: "p3@gmail.com"
    }
];
console.log(users);
console.table(users);

// constant mutability
// object

const person ={
    name: "foulen",
    age: 27,
    adresse: "Tunis"
}

console.log(person)
// change a proprety
person.name= "houssem"
console.log(person);

// Delete a proprety
delete(person.age);
console.log(person);
// add a proprety
person.email="foulen@gmail.com";
console.log(person);

// Tables
const number=[1,2,3,4];
//number= [2,3] // error
console.log(number)

number[1]= 'hello';
console.log(number)

//Truthy & falsy
// false, undefined, null, 0, "", NAN

let test= null;
console.log(test)
console.log(typeof(test))
console.log(Boolean(test));

// comparaison operator
console.log(!true);  //!: opposite

console.log(4!==7);

console.log(4==5);
console.log(4==='4');

//logical operator  AND &&  or ||
console.log(0 && 5); // returns first value if falsy
console.log(4||7) // returns first value if true

// loops
//for

for (let i = 1; i <=10; i++) {
    console.log(`For Loop Number ${i}`)
}

// while
let j=3;
while(j<=10) {
    console.log(`while loop number: ${j}`);
    j++;
}

// loop through arrays
const numb=[22, 55, 66];

for (let k = 0; k < numb.length; k++) {
console.log(numb[k])    
}

for (let x of numb) {
    console.log(x)
}

// conditions
// if/ else
const y=10;
if (y===10) {
    console.log('y is 10');
    
}
else if (y>10) {
    console.log('y is greater than 10')
}
else {
    console.log('y is less than 10');
};

// switch
let color= 'red';

switch (color) {
    case 'red':
        console.log('color is red');
        
        break;
    
        case 'blue':
            console.log('color is blue');

        break;

        case 'black':
            console.log('color is black')

        break;
    default:
           console.log('there is no color')
        break;
}

// function
function greet(name) {
    console.log(`Hello ${name}`)
}
greet("Adam")

function Sum(a,b) {
    return a+b
}
console.log(Sum(2,5))

// arrow function
const great=(name)=> {
    console.log(`Hello ${name}`)
}
great("Mohammed");

const Sam=(a,b)=> 
     a+b;
console.log(Sam(10,20))


