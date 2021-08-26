'use strict';

/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
const infoText = `${country} has a population of ${population} million people and the capital city is ${capitalCity}.`;
return infoText;
}

const infoSweden = describeCountry('Sweden', 10.2, 'Stockholm')
const infoFinland = describeCountry('Finland', 5.5 , 'Helsinki')
const infoNorway = describeCountry('Norway', 5.3 , 'Oslo')
const infoDenmark = describeCountry('Denmark', 5.8 , 'Copenhagen')
const infoIceland = describeCountry('Iceland', 0.3 , 'Reykjavik')

console.log(infoSweden)
console.log(infoFinland)
console.log(infoNorway)
console.log(infoDenmark)
console.log(infoIceland)

/* 
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(population) {
return (population / 7900) * 100;
} 

const percentageChina = percentageOfWorld1(1441)
const percentageSweden = percentageOfWorld1(10.2)
const percentageIceland = percentageOfWorld1(0.3)
console.log(percentageChina)
console.log(percentageSweden)
console.log(percentageIceland)

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageChina2 = percentageOfWorld2(1441)
const percentageSweden2 = percentageOfWorld2(10.2)
const percentageIceland2 = percentageOfWorld2(0.3)
console.log(percentageChina2)
console.log(percentageSweden2)
console.log(percentageIceland2)


/* 
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageChina3 = percentageOfWorld3(1441)
const percentageSweden3 = percentageOfWorld3(10.2)
const percentageIceland3 = percentageOfWorld3(0.3)
console.log(percentageChina3)
console.log(percentageSweden3)
console.log(percentageIceland3)

/* 
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'.Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier
3. Call 'describePopulation'withdatafor3countriesofyourchoice */

const describePopulation = function ( country, population) {
const percentage = percentageOfWorld1(population)
return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}


console.log(describePopulation('china', 1441))

/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 GOOD LUCK 😀 */


const calcAverage = score => score / 3;

const avgDolphins = calcAverage(( 44 + 23 + 71 ))
const avgKoalas = calcAverage(( 65 + 54 + 49 ))

console.log (avgDolphins, avgKoalas)


const checkWinner = function( avgDolphins, avgKoalas) {
 if(avgDolphins > avgKoalas) {
    return `Dolfins wins, with ${avgDolphins} vs. ${avgKoalas}`
 }
 else if(avgDolphins < avgKoalas) {
    return `Koalas wins, with ${avgKoalas} vs. ${avgDolphins}`
 }
else {
    return `There is a tie, Koalas scored ${avgKoalas} and Dolphins scored ${avgDolphins}`
}
}

console.log(checkWinner( avgDolphins, avgKoalas))


const avgDolphins2 = calcAverage(( 85 + 54 + 41 ))
const avgKoalas2 = calcAverage(( 23 + 34 + 27 ))

console.log (avgDolphins2, avgKoalas2)


console.log(checkWinner( avgDolphins2, avgKoalas2))


/* 
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values */


const populationArray = [ 10.2, 5.8, 5.5, 5.3 ]
console.log(populationArray.length >= 4 ? true : false)

const percentages = [ percentageOfWorld1(10.2), percentageOfWorld1(5.8), percentageOfWorld1(5.5), percentageOfWorld1(5.3)]

console.log(percentages)

/* 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, sothebill+tip Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀


 */

const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .2);
console.log(calcTip(100))

const bills = [ 125, 555, 44]
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
const totals = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ]
console.log(totals)

 const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: [ 'Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    calcAge: function() {
        return this.age = 2037 - this.birthYear
    },
    infoString: function() {
        return this.info = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
    }

 };


 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

 //Challange make a string like this: 
 // Jonas is a 46-year old teather.<z,m
jonas.infoString()
 console.log(jonas.info)
 console.log(jonas)
 

/* 
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after sometime, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that,find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

const neighbours = [ 'sweden', 'norway', 'finland', 'denmark', 'iceland' ]
neighbours.push('utopia') 
console.log(neighbours)
neighbours.pop()
console.log(neighbours)

console.log (neighbours.includes('germany') ? 'It is a central European country :D' : 'Probably not a central European country :D')



const replaceNeighbours = function(country) {
    if(neighbours.includes(country)) {
        const swedenIndexNr = neighbours.indexOf(country);
        neighbours[swedenIndexNr] = 'Empire of Miri'
        console.log(neighbours)
    }
    else {
        return console.log('there is no country like that in this array')
    }
} 

replaceNeighbours('sweden')

/* 
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments) */

const mirisCountry = {
country : 'Empire of Miri', 
capital: 'Miri',
language: 'Wao Wao',
population: 1,
neighbours: [ 'Wao Wao', 'Wao Wao'],
describe: function() {
console.log(`${this.country} has ${this.population} ${this.language} speaking cat, ${this.neighbours.length} neighbouring wao waos and a capital called ${this.capital}`)
},
checkIsland: function() {
 return this.isIsland = this.neighbours.length === 0 ? true : false;
}
}
console.log(mirisCountry)
/* 
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
 */
console.log(`${mirisCountry.country} has ${mirisCountry.population} ${mirisCountry.language} speaking cat, ${mirisCountry.neighbours.length} neighbouring wao waos and a capital called ${mirisCountry.capital}`)
console.log(mirisCountry.population = mirisCountry.population + 2)
console.log(mirisCountry['population'] = mirisCountry['population'] - 2)
/* 
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
 */
mirisCountry.describe()
console.log(mirisCountry.checkIsland())

/* 
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
 */

 const personOne = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.BMI = this.mass / (this.height **2);
    }
 }

 const personTwo = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.BMI = this.mass / (this.height **2);
    }
 }

personOne.calcBMI()
personTwo.calcBMI()


if(personOne.BMI > personTwo.BMI) {
    console.log( `${personOne.fullName} BMI ${personOne.BMI} is higher than ${personTwo.fullName} BMI ${personTwo.BMI}`)
}
else if(personOne.BMI < personTwo.BMI) {
    console.log( `${personOne.fullName} BMI ${personOne.BMI} is lower than ${personTwo.fullName} BMI ${personTwo.BMI}`)
}
else {
    console.log( `${personOne.fullName} BMI ${personOne.BMI} is the same as ${personTwo.fullName} BMI ${personTwo.BMI}`)

}


/* 
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for( let person = 1; person <= 50 ; person++) {
console.log(`Person number ${person} has now voted`)
}


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    1991,
    'teacher',
    [ 'Michael', 'Peter', 'Steven'],
    true
]


for (let i = (jonasArray.length -1); i >= 0; i-- ) {
    console.log(jonasArray[i])
}


const jonasArrayType = []

for( let i = 0; i < jonasArray.length; i++) {
   if(typeof jonasArray[i] !== 'string') continue;
   jonasArrayType.push(typeof jonasArray[i]);
}

console.log(jonasArrayType)


const jonasArrayType2 = []

for( let i = 0; i < jonasArray.length; i++) {
   if(typeof jonasArray[i] === 'number') break;
   jonasArrayType2.push(typeof jonasArray[i]);
}

console.log(jonasArrayType2) 


/* 
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

 */
 
const percantages2 = []

for(let i = 0; i < populationArray.length ; i++  ) {
     percantages2.push((populationArray[i] / 7900) * 100)
}
console.log(percantages2)


for (let exercise = 1; exercise < 4 ; exercise++) {
    console.log(`starting exercise ${exercise}`)
    for(let rep = 1; rep < 4; rep++){
        console.log(`rep ${rep}`)
    }
    
} 
/* 
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
 */

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
console.log(listOfNeighbours)
for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let y = 0; y <listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
}
/* 
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflecton what solution you like better for this task: the for loop or the while loop?
   */


 
const percantages3 = []
let i = 0;

while( i < populationArray.length) {
     percantages3.push((populationArray[i] / 7900) * 100)
     i++
}
console.log(percantages3)


 /* 
 Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:



4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀 */


const calcTip2 = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
} 

const bills2 = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips2 = []
const totals2 = []

for(let i = 0; i < bills2.length; i++){
    const tip = calcTip2(bills2[i]);
    tips2.push(tip);
    totals2.push(bills2[i] + tip);
    
}

let averageBills;
let averageTips;
let averageTotals;

const calcAverage2 = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] }
    return sum / arr.length
}


averageBills = calcAverage2(bills2)
averageTips = calcAverage2(tips2)
averageTotals = calcAverage2(totals2);
console.log(bills2, tips2, totals2, averageBills, averageTips, averageTotals)

