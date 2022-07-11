// let js = "Amazing";
// console.log(40+8+23-10);
// // variale name conventions
// let jina = "nate";
// let jinaYaPili = "kamau"
// console.log(jina);
// console.log(jinaYaPili)
// let myFirstSchool = "jkuat";
// let mySecondScholl = "kca";
// console.log( myFirstSchool);
// console.log(mySecondScholl)
// // boolean 
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // typeof
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "ate");
// // reassigning a variale
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);
// // undefined
// let year;
// console.log(year);
// console.log(typeof  year);
// //basic operators
// //math operators
// const now = 2022;
// const nateAge = now - 1998;
// const arnoldAge = now - 2008;
// console.log (nateAge, arnoldAge);
// console.log (nateAge * 2, arnoldAge ** 3)
// // arnoldAge ** 3 means arnoldAge to the power of 3
// // you can also use operators to add strings eg
// const nateFirstName = "nathan";
// const nateLastName = "Kamau";
// console.log(nateFirstName + " " +  nateLastName);
// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *=4; // x = x * 4 = 100
// x ++; // x = x + 1 = 101
// x --;
// x--;//this means x - 1= 99
// console.log(x);
// //comparison operators
// console.log(nateAge > arnoldAge);
// console.log(arnoldAge >= 18);
// const isFullName = arnoldAge >= 18;
// console.log (now - 1998 > now - 2008);
// let z , y;
// z = y = 25 - 10 - 5;//x = y= 10, x = 10
// console.log(z, y)


// const averageAge = (nateAge + arnoldAge) / 2;
// console.log(nateAge, arnoldAge);
// console.log(averageAge);

//coding challange 1
//1 store johns and janes mass and height in variabbles
let heightJohn = 1.69;
let heightJane = 1.95;
let weightJohn = 78;
let weightJane = 92;
//calculate both their bmi
let johnBmi = weightJohn / heightJohn ** 2 ;
console.log(johnBmi);
let janeBmi = weightJane / heightJane ** 2 ;
console.log(janeBmi);
// create a boolean variabble janeshigherbmi containing information about whether janes has a higher bmi
let janeHigherBmi = janeBmi > johnBmi ;
console.log(janeHigherBmi);

//strings and template literals was introduced with ES6
const fName = "nathan";
const job = "developer";
const birthYear = 1999;
const year = 2022;

const nathan = "i`m " + fName + ", a" + (year - birthYear) + "years old" + job + "!"
console.log(nathan);

const nathanNew = `i am ${fName}, a ${year - birthYear} years old ${job};`
console.log(nathanNew);

// before ES6 you could write  sttrings with a new line in a very cumbersome way but ES6 helped solve that check the code below
//b4
console.log("string with \n\
multiple \n\
line\n\
");
//after 
console.log(`ate
ate
ates`);
//takig decisions with control statements
const age = 15;

if(age >= 18) {
    console.log("Nate is old enough to drive🚕");
}else {
 const yearsLeft = 18 - age;
 console.log(`sarah is too young wait another ${yearsLeft} years🤦‍♀️`);
}
const mwakaKazaliwa = 1999;
let century;
if(mwakaKazaliwa <= 2000){
    century = 20;
}else {
    century = 21;
}
console.log(century);
//coding challange 2
if (janeBmi > johnBmi){
    console.log(`Jane's BMI${(janeBmi)} is higher tha Johns BMI${(johnBmi)}!`);
}else   {
    console.log(`Johns BMI(${johnBmi}) is higher than Jane's BMI(${janeBmi})!`);
}
// type conversion and coercion
//conversion
const inputYear = "1998"
console.log(Number(inputYear), inputYear);//you can use the Number() funnction when you want to convert the string to number
console.log(Number(inputYear) + 18);//the answer here will be 199818 because the brackets made the 1998 a string which is concucted with 18 instead of adding
console.log(String(23), 23);
//coercion
console.log("i am " + 23 + "years old")//this is able to complete because of type coercion
console.log("23" - "13" - 3);//for the minus sign it changes thinhs a bit here the strings are converted into numbers
console.log("23" * "2");
console.log("22" / "2");
// falsy and truthy values are ways of converting into boolean
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("nate"))
console.log(Boolean({}))
console.log(Boolean(""))

const money = 0;
if (money) {
    console.log('dont spend at all');
} else {
    console.log('you should get a job');//this will get excecuted because of type coercion where the value of money being 0 JS converts the money to boolean falsy as 0 is always false hence the else statement is excecuted and not the if statement
}
let height;
if (height){
    console.log('yay height ');
} else {
    console.log('height is undefined');//this will be excecuted because of type coercion taking place which changes the value to boolean falsy
}
//equality operators
const miaka = '18';
if (miaka === 18) console.log('kako legal😉😉');

if (miaka == 18) console.log('kako legal😉😉');//only this one will get excecuted as the loose equality operator allows for type coercion while the srict equality operator does not allow type coercion hence avoid using the loose equality operator
const favourite = Number(prompt('whats your favourite number'))//convert the answer to a number so that you use the strict equality operator
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool 23 like jordans');
}else if (favourite === 7){
    console.log('seven is also cool');
}else {
    console.log('wrong number dummy');
}
if (favourite !== 23) console.log('why not 23');

//logical operators 
const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision)
console.log(hasDrivingLicense || hasGoodVision)
console.log(!hasDrivingLicense )

// const shouldDrive = hasDrivingLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Nate should drive');
// }else {
//     console.log('someone else should drive');
// }
const isTired = false;
console.log(hasDrivingLicense || hasGoodVision || isTired);
if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log('Nate should drive');
}else {
    console.log('someone else should drive');
}

//quiz 4
// calculate the average score for each team

const dolphinesAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
const minScore = 100
console.log(dolphinesAverage, koalasAverage);
if(dolphinesAverage > koalasAverage){
    console.log(`The Dolphines are the state champions with an average of ${dolphinesAverage}!`);
}else {
    console.log(`The Koalas are the state champions with a average of ${koalasAverage
    }`);
}

//bonus quiz 1
const dolphineScore = false;
const dolphineScoreHigher = false;
const koalasScore = true;
const koalasScoreHigher =true;
const dolphineScoreTwo = true;
const dolphineScoreHigherTwo = true;
const koalasScoreTwo = false;
const koalasScoreHigherTwo =false;
const dolphineScorethree = false;
const dolphineScoreHigherthree = true;
const koalasScorethree = true;
const koalasScoreHigherthree =true;
if (dolphineScore && dolphineScoreHigher) {
    console.log ("Congrats the dolphines win game one")
} else {
    console.log("Congrats Koalas win game one");
}
if (dolphineScoreTwo && dolphineScoreHigherTwo) {
    console.log ("Congrats the dolphines win game two")
} else {
    console.log("Congrats Koalas win game two");
}
if (dolphineScorethree && dolphineScoreHigherthree) {
    console.log ("Congrats the dolphines win game three")
} else {
    console.log("Congrats Koalas win game three");
}
// bonus one repeat 
const dolphinesMarks = ((97 + 112 + 81)  / 3)
const koalasMarks = ((109 + 95 + 86)  / 3)
console.log(dolphinesMarks, koalasMarks);
if (koalasMarks > dolphinesMarks && koalasMarks > 100) {
    console.log("Congrats Koalas");
} else if (dolphinesMarks > koalasMarks &&  dolphinesMarks > 100){
    console.log("Congrats dolphines");
}else  if (dolphinesMarks === koalasMarks && dolphinesMarks > 100 && koalasMarks > 100){
        console.log("It is a Draw" ) 
    } else {
        console.log("the we can say nobody wins tonight");
    }

