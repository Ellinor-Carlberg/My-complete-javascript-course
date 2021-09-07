'use strict';

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