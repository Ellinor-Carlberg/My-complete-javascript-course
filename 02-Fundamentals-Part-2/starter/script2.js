"use strict";

/* 
function logger() {
    console.log('logger')
}

logger()



const logger2 = function() {
    console.log('logger2')
}

logger2()



function logger3(apples, pears) {
    return apples + pears
}

const logger3Value = logger3(5, 6)

console.log(logger3Value)



function hello(name, lastname) {
    console.log('hello ' + name + ' ' + lastname)
}

hello('elli', 'carlberg')




const thisYear = 2021


function calcAge(born) {
return thisYear - born
}

console.log(calcAge(1991))


function calcAge1(birthYear) {
return 2037 -birthYear
}345


console.log(calcAge1(2020))
console.log(calcAge1(2000))

 

const caclAge3 = function(birthYear) {
    return 2037-birthYear
}


console.log(caclAge3(2036))


const calcAge4 = birthYear => 2037-birthYear;
const calcAge5 = function(birthYear) {
    return 2037-birthYear
}

const arrowF = () => console.log('hej')

arrowF()
const fruitSlicer = function(fruit) {
return fruit * 4
}



function fruitProcesor(apples, oranges) {
    const appleBites = fruitSlicer(apples);
    const orangeBites = fruitSlicer(oranges);
    console.log('applebites', appleBites, 'orangebites', orangeBites)
    }
    
    fruitProcesor(2, 3)
    
     */
/* 
function describeCountry(country, population, capitalCity) {
return `${country} have the population of ${population} millions and the capital is ${capitalCity}`
}


const myCountry = describeCountry('sweden', 10, 'Stockholm')
const favoriteCountry = describeCountry('Portugal', 10, 'Lissabon')
const secondFavoriteCountry = describeCountry('Iceland', .36, 'Reykjavik')
console.log(myCountry, favoriteCountry, secondFavoriteCountry )


function precentageOfWorld1(population) {
const worldPopulation = 7900;
return (population / worldPopulation) * 100
}


const precentageOfWorld2 = function(population) {
    const worldPopulation = 7900;
return (population / worldPopulation) * 100
}


const precentageOfWorld3 = population => (population / 7900) * 100

const swedenPrecentage = precentageOfWorld3(10)
const portugalPrecentage = precentageOfWorld3(10)
const icelandPrecentage = precentageOfWorld3(.36)
console.log(swedenPrecentage, portugalPrecentage, icelandPrecentage)


const arrowF2 = () => 'hello'

console.log(arrowF2())

function calcPrecentage(population) {
    return (population / 7900) * 100
    }
    



const describePopulation = function(country, population) {
const precentage = calcPrecentage(population)

return `${country} has ${population} million people, which is about ${precentage} of the world`
}



const finland = describePopulation('Helsinki', 5.5)
const tyskland = describePopulation('Berlin', 83)
const frankrike = describePopulation('Paris', 67)

console.log(finland, tyskland, frankrike)



functionName('tjooho')


function functionName(msg) {
    return console.log('declaration', msg)
}



const fname = function(msg) {
return console.log('expression', msg)
}

fname('tjingeling')


const fnameA = msg => console.log('arrow', msg)

fnameA('tjopp')

 */

/* const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3


const averageKoalas = calcAverage(10, 10, 10)
const averageDolfins = calcAverage(20, 20, 20)

console.log(averageKoalas, averageDolfins)

const checkWinner = function(avgDolfins, avgKoalas){
if(avgDolfins >= avgKoalas * 2) return `dolfins wins ${avgDolfins} vs ${avgKoalas}`;
else if(avgKoalas >= avgDolfins * 2) return `koalas wins ${avgKoalas} vs ${avgDolfins}`;
else return `its a tie ${avgDolfins} vs ${avgKoalas}`;
}

console.log(checkWinner(averageDolfins, averageKoalas)) */

/* const friends = [ 'miri', 'lisa', 'sara']

console.log(friends.filter(checkname))

function checkname(friend) {
    return friend === 'lisa'
}
 */

/* const precentageOfWorld3 = population => (population / 7900) * 100

const populations = [ 10, 0.36, 83, 67]
console.log(populations.length === 4 ? true : false)

const percentages = [precentageOfWorld3(populations[0]), precentageOfWorld3(populations[1]), precentageOfWorld3(populations[2]),precentageOfWorld3(populations[3])]

console.log(percentages)


const neighbours = ['norway', 'finland', 'denmark']
neighbours.push('utopia')
neighbours.pop()
console.log(neighbours)
if(!neighbours.includes('germany'))console.log('probly not a central european country')

console.log(neighbours.indexOf('finland'))
neighbours[1] = 'finland, the best country in the world'
console.log(neighbours) */

/* 

const mirisLeksaker = [ 'vit pudel', 'domherre', 'liten vit mus', 'spö', 'bollbana', 'fiskmås', 'ekorre', 'folieboll', 'boll', 'garnnysta', 'snöre', 'laserpekare']

mirisLeksaker[2] = 'många små möss'

console.log(mirisLeksaker, mirisLeksaker[mirisLeksaker.length -1])

console.log(mirisLeksaker.pop(), mirisLeksaker)

mirisLeksaker.push('laserpekare')
console.log(mirisLeksaker)


function calcTip(billValue) {
    if(billValue >= 50 && billValue <= 300)
return billValue * .15;
else return billValue * .20;
}


console.log(calcTip(100))



const bills = [ 125, 555, 44 ]
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]]
console.log(bills, tips, total)
 */

/* 
const myCat = {
    firstName: 'miri',
    colors: [ 'black', 'white', 'brown'],
    sound: function(mood) {
        if(mood==='angy')return `${this.firstName} is spitting`;
        else if(mood==='cuddly') return `${this.firstName} is sounding: prrrrrrr`;
        else return `${this.firstName} is saying waao waaooo`
    }
    
}
myCat.lastName = 'sirisdotter'

console.log(myCat.sound('happy'), myCat) 


const animals = [
    { species: 'cow', firstName: 'Rosa'},
    { species: 'dog', firstName: 'Buster'},
    { species: 'cat', firstName: 'Kurre'},
    { species: 'bird', firstName: 'Polly'},
]

console.log(animals)

const myCountry = {
    country: 'sverige',
    capital: 'stockholm',
    language: 'svenska',
    population: 10,
    neighbours: [ 'finland', 'danmark', 'norge'],
    describe: function(){
        return `${this.country} har ${this.population} miljoner människor och dom pratar ${this.language}. Det finns ${this.neighbours.length} grannländer och huvudstaden är ${this.capital} `
    },
    checkIsland: function() {
        return this.neighbours.length > 0 ? this.isIsland = false : this.isIsland = true;
    }
}

myCountry.population = myCountry.population +2;
myCountry['population'] = myCountry['population'] -2;
console.log(`${myCountry.country} har ${myCountry.population} miljoner människor och dom pratar ${myCountry.language}. Det finns ${myCountry.neighbours.length} grannländer och huvudstaden är ${myCountry.capital} `)

console.log(myCountry.describe()) 
console.log(myCountry['population']) 
console.log(myCountry.checkIsland(), myCountry)

 */
/* 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
return this.bmi = this.mass / (this.height * this.height);
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
       return this.bmi = this.mass / (this.height * this.height);
    }
}

console.log(`${mark.fullName} BMI ${mark.calcBMI()} is ${mark.calcBMI() > john.calcBMI() ? 'higher' : 'lower'} then ${john.fullName} BMI ${john.calcBMI()}`, john, mark )  */

/* const myObject = {
    cat: 'miri',
    phone: 'iphone',
    myName: 'ellinor',
    message(miriIs) {
        this.miriIs = miriIs
        return `hej ${this.cat} ${this.miriIs}`;
    }
}

myObject.phone = 'iphone 6s';
myObject['pho' + 'ne'] = 'iphone';
console.log(myObject.message('gullunge'), myObject.phone)

myObject.message = function() {
    return 'hejhej'
}

console.log(myObject.message()) */
/* 
for(let rep = 1; rep <= 10; rep++){
    console.log(rep)
}

const friends = [ 'miri', 'lisa', 'sara', 'mirjam', 'lotten', 'sofia', 'maria', 'lisen', 'sarah', 'nina', 'parisa', 'klara']

const friendsAndTypes = []
const types = [] 
for(let rep = 0; rep <= friends.length -1; rep++){
    friendsAndTypes.push(friends[rep]+ typeof friends[rep])
    types[rep] = typeof friends[rep]
    console.log(friends[rep], friendsAndTypes[rep], types[rep])
}
console.log(types)
 */

/* 
const myArray = [ 
    'myString',
    8,
    true,
    'my second string',
    [ 'this', 'is', 'my', 'array'],
    {
        myName: 'Ellinor',
        age: 32,
        hasDriverLicence: true
    },
    'my last string'
]


const newArray = []

for(let i = 0; i < myArray.length; i++) {
    if(typeof myArray[i] !== 'string') continue;
    newArray.push(typeof myArray[i]) 
    console.log(myArray[i], newArray)
    
}

for(let i = myArray.length; i >= 1; i--) {
    console.log(i)
}

for(let i = 1; i <= 3; i++) {
    console.log('round', i)
    for(let rep = 1; rep <= 5; rep++) {
        console.log('rep', rep)
    } 
} 

for(let i = 1; i <= 50; i++) {
    console.log('voter number', i)
}

const populations = [ 10, 0.36, 83, 67]
const percentages2 = []

for(let i = 0; i < populations.length; i++) {
    percentages2.push((populations[i] / 7900) * 100)
}

console.log(percentages2)

const listOfNeighbours = [
    ['canada', 'mexico'], 
    ['spain'], 
    ['norway', 'sweden', 'russia']
]

for(let i = 0; i < listOfNeighbours.length; i++) {
   //console.log(listOfNeighbours[i]) 
    for(let x = 0; x <listOfNeighbours[i].length; x++) {
        console.log(`Neighbour: ${listOfNeighbours[i][x]}`)
    }
} 
 
let rep = 1;

while(rep <= 10){
    console.log(`rep ${rep}`)
    rep++
}
*/
/* 
let randomNumber = Math.trunc(Math.random() * 10)
console.log(randomNumber)


while(randomNumber <= 6) {
    console.log(`nine or less, you got ${randomNumber}`)
    randomNumber = Math.trunc(Math.random() * 10)
    if( randomNumber > 6)console.log(`You got more then 6, you got ${randomNumber}`)
}


const populations = [ 10, 0.36, 83, 67]
const percentages2 = []

let i = 0;
while(i < populations.length){
    percentages2.push(((populations[i]) / 7900) * 100)
    i++
}

console.log(percentages2) */
/* 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage1 = function (arr) {
  let total = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  average = total / arr.length;
  return average;
};

console.log(calcAverage1([2, 3, 7]));
console.log(calcAverage1(totals));
 */

/* 
const animals = [
    { species: 'cow', firstName: 'Rosa'},
    { species: 'dog', firstName: 'Buster'},
    { species: 'cat', firstName: 'Kurre'},
    { species: 'bird', firstName: 'Polly'},
    { species: 'cow', firstName: 'Rosa'},
    { species: 'dog', firstName: 'Buster'},
    { species: 'cat', firstName: 'Kurre'},
    { species: 'bird', firstName: 'Polly'},
    { species: 'cow', firstName: 'Rosa'},
    { species: 'dog', firstName: 'Buster'},
    { species: 'cat', firstName: 'Kurre'},
    { species: 'bird', firstName: 'Polly'}
]

const animalNames = []

for(let i = 0; i < animals.length; i++ ) {
    animalNames.push(animals[i].firstName)
   
}

const animalNamedRosa = animalNames.filter(function(animalName) {
    return animalName === 'Rosa'
})

console.log(animalNames, animalNamedRosa)


for(let i = 0; i < animalNamedRosa.length; i++) {
    console.log(animalNamedRosa[i])
} */