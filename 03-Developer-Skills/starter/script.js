// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// vad är en temperature amplitude?
// Svar: skillnaden mellan den högsta och lägsta temperaturen.
// 2) Breaking up into sub-problems
//ta reda på hur man arbetar med negativa nummer
//ta reda på hur man gör med en sträng
//hitta det lägsta nummret i arrayen
//hitta det högsta nummret i arrayen
//retunera det högsta nummret - det lägsta

const temperaturesOnlyNumbers = temperatures.filter(Number);
console.log(temperaturesOnlyNumbers);

const minTemp = Math.min(...temperaturesOnlyNumbers);
console.log(minTemp);

const maxTemp = Math.max(...temperaturesOnlyNumbers);
console.log(maxTemp);

const calcTempAmplitude = function (temperatureArray) {
  const temperaturesOnlyNumbers = temperatureArray.filter(Number.isFinite);
  console.log(temperaturesOnlyNumbers);

  const minTemp = Math.min(...temperaturesOnlyNumbers);
  console.log('min', minTemp);

  const maxTemp = Math.max(...temperaturesOnlyNumbers);
  console.log('max', maxTemp);

  const tempAplitude = maxTemp - minTemp;

  return tempAplitude;
};

console.log('calcTempAmplitude', calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// är det samma som innan, men att det ska jämföras temeratur för 2 olika dagar/arrayer?
//Ska det vara max och min temp för 2 dagar? inte en amplitude temp för varje dag som ska jämföras med varandra?
//Svar: 1 max temp och 1 min temp från dessa 2 arrayer

// 2) Breaking up into sub-problems
//skapa en ny array av 2 st arrayer
//Jag vill utmanna mig själv och väljer att det ska vara valfritt att ha med en andra array.

const array1 = [2, 4, 5];
const array2 = [5, 200, 'error'];
array1.push(...array2);
console.log(array1);

const calcTempAmplitude2Days = function (temperatureArray1, temperatureArray2) {
  const completeTemperatureArray = temperatureArray2
    ? temperatureArray1.concat(temperatureArray2)
    : temperatureArray1;

  console.log(completeTemperatureArray);

  /* Min gamla lösning med push
  
  const completeTemperatureArray = [];

  if (temperatureArray2)
    completeTemperatureArray.push(...temperatureArray1, ...temperatureArray2);
  else completeTemperatureArray.push(...temperatureArray1);
  console.log(completeTemperatureArray); */

  const temperaturesOnlyNumbers = completeTemperatureArray.filter(
    Number.isFinite
  );
  console.log(temperaturesOnlyNumbers);

  const minTemp = Math.min(...temperaturesOnlyNumbers);
  console.log('min', minTemp);

  const maxTemp = Math.max(...temperaturesOnlyNumbers);
  console.log('max', maxTemp);

  const tempAplitude = maxTemp - minTemp;

  return tempAplitude;
};

/*
console.log('calcTempAmplitude', calcTempAmplitude2Days(temperatures));

const array10 = ['2', 'error', 10, 'array10'];
const array20 = ['20', 'no error', 20, 'array20'];

console.log(array20.push(...array10), array20);


const array30 = array10.concat(array20);
const array40 = [2, 5, 9, 10, 100, 2, 1];
console.log('array30', array30);

const min = Math.min(...array40);
console.log(min);

for (let i = 0; i < array10.length; i++) {
  console.log(typeof array10[i] == 'number' ? array10[i] : 'no');
}

const array50 = [2, 5, 9, 'halloj', 10, 100, 2, 1, 'lol'];
const array50Numbers = array50.filter(number => typeof number == 'number');
console.log('array50Numbers', array50Numbers);

const secondF = function (message) {
  console.log('secondF', message);
};

function firstF(msg) {
  secondF(msg);

  console.log('firstF');
}

firstF('hej');

const thirdF = () => console.log('secondF');

thirdF();

const array8 = [3, 'hej', 'miri', false];

array8[1] = 'halloj';

array8.push(' = ');

console.log(array8.length);
  */
/* 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };

  const kelvin = measurement.value + 273;

  return kelvin;
};
console.log('hej');
console.log(measureKelvin());
 */

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// skapa en funktion, ska kunna ta en en array med siffror.
// för varje siffra i array ska en sträng printas ut t.ex så här: ... 17ºC in 1 days
// array kan vara hur lång/kort som helst

// 2) Breaking up into sub-problems
// skapa en function
// tar in en array med nummer
//retunerar en sträng
// varje siffra i arrayen ska retunera en del i strängen

function printForecast(forecastArray) {
  const stringArray = [];
  for (let i = 0; i < forecastArray.length; i++) {
    stringArray.push(`... ${forecastArray[i]}ºC in ${i + 1} days`);
  }

  const forecastString = stringArray.join(' ');
  return forecastString + ' ...';
}

console.log(printForecast([12, 5, -5, 0, 4]));
/* 
const myObject = {
  myFirst: 'firstThing',
  isTrue: true,
  myNumber: 8,
  myArray: [3, 2, 1, 0],
  myMethod: function (msg) {
    this.myMessage = msg;
    return this.isTrue;
  },
  mySecondMethod() {
    return this.myFirst;
  },
};

myObject.newMessage = 'hello';
console.log(
  myObject.myMethod('hej'),
  myObject.mySecondMethod(),
  myObject.myMessage,
  myObject.newMessage,
  myObject['myArray']
);

console.error('error');
console.warn('warning');
console.table(myObject);
 */
