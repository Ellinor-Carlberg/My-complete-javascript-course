//ep 9
let js = "amazing";
/* if (js === "amazing") alert("JS is fun"); */
console.log(40 + 8 + 23 - 10);

//ep10
let firstName = "Jonas";
console.log(firstName);
firstName = "Bob";
console.log(firstName);

let PI = 3.1415;
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
//better than
let job1 = "Programmer";
let job2 = "Teacher";

//Assignment 1 + 3
const country = "Sweden";
const continent = "Europe";
let population = 10.23;
console.log(country, continent, population);

//ep 12 -datatypes
let number = 23;
let string = "hello";
let booleanIsgreat = true;
let undefinedValue;
console.log(typeof booleanIsgreat, typeof true);

//Assignment 2 + 3
const isIsland = false;
let language;
console.log( typeof country, typeof continent, typeof population, typeof isIsland, typeof language);

//Assignment 3
language = 'swedish';

//ep 14  -operators
const now = 2021
const ageElli = now - 1988;
const ageMiri = now -2020;
console.log(ageElli);

let x = 10 + 5
console.log(x)
x += 10 // x = x + 10  = 25
x *= 4 // x = x * 4 = 100
console.log(x)

//Assignment 5
const population2021DividedInTwo = population / 2
console.log(population2021DividedInTwo)
console.log(population + 1)
let populationFinland = 6;
console.log( population > populationFinland);
let populationAverage = 33;
console.log( population > populationAverage);
const description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;
console.log(description);
const descriptionTwo = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(descriptionTwo);



const isFullAge = ageElli >= 18;
console.log(isFullAge)

//same resault
console.log( ageElli > ageMiri)
console.log(now - 1988 > now - 2020)

const averageAge = (ageElli + ageMiri) / 2;
console.log(averageAge)


/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀 */

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heighJohn = 1.95;

/* massMark = 95;
heightMark = 1.88;
massJohn = 85;
heighJohn = 1.76;
 */

const BMIMark = massMark / (heightMark **2);
const BMIJohn = massJohn / (heighJohn **2);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


if(population > populationAverage) {
    console.log(`${country}s population is above average'`)
   
} else {
    const belowAvarage = populationAverage - population
    console.log(`${country}s population is ${belowAvarage} million below average'`) 
}

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a templateliteral to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀 */


if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is lower than John's (${BMIJohn})`)
}

/* 
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; number
'19' - '13' + '17';  number // right answer string!
'19' - '13' + 17; number
'123' < 57; boolean
5 + 6 + '4' + 9 - 4 - 2; number
2. Execute the operations to check if you were right */

console.log('9' - '5', '19' - '13' + '17' , '19' - '13' + 17 , '123' < 57 , 5 + 6 + '4' + 9 - 4 - 2 )

/* 
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input liket his: prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour,log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'Morethan1border' incase 'numNeighbours' is greater than 1
4. Use an else block to log 'Noborders'(this block will be executed when 'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
 */

/*  const numNeighbours = prompt('How many neighbour countries does your country have?');

 if (Number(numNeighbours) > 1) {
    console.log( 'more than 1 border!');
 }
 else if (Number(numNeighbours) === 1) {
    console.log( 'Only 1 border!');
 }
 else {
    console.log( 'no borders!');
 }
 */

 /* 
 LECTURE: Logical Operators
1. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
2. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
3. If yours is the right country, log a string like this: 'You should live in Portugal:)'. If
not, log 'Portugal does not meet your criteria :('
4. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in Canada :D) */

if (language === 'swedish' && population < 50 && !isIsland) {
console.log('Sarah should live in Sweden:)')
}
else console.log('Sarah should not live in Sweden:(')


/* 
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! So a draw only happen swhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
   */

const averageScoreKoalas = (96 + 108 + 89) / 3;
const averageScoreDolphins = (88 + 91 + 110) / 3;
console.log(averageScoreKoalas, averageScoreDolphins)

if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100 ) {
    console.log('Koalas win! :)')
} 
else if (averageScoreKoalas === averageScoreDolphins && averageScoreKoalas >= 100){
    console.log('There is a draw! :)')
}

else if (averageScoreKoalas < averageScoreDolphins && averageScoreDolphins >= 100){
    console.log('Dolphins win! :)')
}

else {
    console.log('No one win! :(')
}

/* 
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

const languageForSwitch = 'hindi';

switch (languageForSwitch) {
    case 'mandarin': 
    case 'chinese':
    console.log('MOST number of native speakers!');
    break;

    case 'spanish':
    console.log( '2nd place in number of native speakers');
    break;

    case 'english':
    console.log('3rd place')
    break;

    case 'hindi':
    console.log('Number 4')
    break;

    case 'arabic':
    console.log('5th most spoken language')
    break;

    default:
    console.log('Great language too :D')
}
/* 
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original */

 console.log(`${country}'s population is ${population > populationAverage ? 'above' : 'below'} average`);

/* 
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
GOOD LUCK 😀

 */
const bill =  10;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`the bill is ${bill}, and the payment is ${tip + bill}`)