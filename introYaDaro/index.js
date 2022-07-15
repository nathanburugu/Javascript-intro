alert("iam learning javascript")
let nate = "ate";
console.log(nate)
for(let ate = 1; ate < 5 ; ate++ ){
    console.log(ate);
}
var nates = (30 / 100) * 2;
var mates = (20/ 100) * 2;
console.log(`The answer is ${nates * 100 + mates * 10}  `);
const fName = "nathan";
const lName = "burugu"
console.log(`My full Names are ${fName +  " " + lName}`); 

//wednesday class ist 
// const age = birthYear => 2022 - birthYear;
// const birthYear = prompt("please enter your age");
// alert (`You are: ${age} years old`);
//
var agey = parseInt(prompt(`please enter your age`));//parseInt is used to convert the string to number or integer
agey +=1;
alert(`you are ${agey} years old`);
//class quiz
//must be 18years and must be registered
// const votersCard = true
// const age = prompt("please enter your age")
// if(age > 18 && age < 80  ) {
//     alert('you can proceed and vote');
// } else if ( age >= 1 && age <= 17 && age <=130 ){
//     alert(`you are not allowed to vote`)
// } else {
//     alert('invalid age')
//                                                                                                                                                                                                                                                 function voting(votersCard, age) {
//     const voterz = prompt('do you have a voters card')
//     const miaka = prompt("enter your age")
// if(age > 18 && age < 80 && votersCard == "yes" ) {
//     alert('you can proceed and vote');
// } else if ( age >= 1 && age <= 17 && age <=130 ){
//     alert(`you are not allowed to vote`)
// } else {
//     alert('invalid age')
// };
// return miaka, voterz;
// }  
// const ate = voti

// const voterz = prompt('do you have a voters card !please answer yes or no')
// const age = prompt("enter your age")
// if(age > 18 && age < 80 && voterz == "yes" ) {
//     alert('you can proceed and vote');
// } else if ( age >= 1 && age <= 17 && age <=130 ){
//     alert(`you are not allowed to vote`)
// } else {
//     alert('invalid age')
// };
//class test
// const cat =parseInt(prompt('Please enter your cat results'));
// function scores(cat){
// if(cat > 30 && cat < 0){
//     alert('ivalid results')
// } else if(cat >= 0 && cat <= 30){
//     const catChecked = "catt"
//     return catChecked;
// }
// const cat2 = parseInt(prompt("please enter your cat results"))
// const caty = scores(prompt("Please enter your cat results"));
// alert(caty)
// if(cat > 30 && cat < 0){
//     const catChecked = 0
// } else if(cat >= 0 && cat <= 30){
//     const catChecked = "catt"
//     return catChecked;
// }

// const final = parseInt(prompt(  "please enter your final exams results"));
// const total = cat + final
const final = parseInt(prompt(  "please enter your final exams results"));
const cat =parseInt(prompt('Please enter your cat results'));
const total = cat + final
if (total >= 80 && total <= 100 ){
    alert("You got a distinction");
} else if ( total >= 60 && total <= 79) {
    alert("you tried and got a credit");
} else if (total >= 40 && total <= 59){
    alert("you just passed man");
}else if(total >= 0 && total <= 39){````
    alert("please repeat the unit");
} else {
    alert("Invalid Marks");
}

const paka = parseInt(prompt(" enter your CAT results"));
const mwisho = parseInt(prompt("Enter Your Final exams results"));
if( paka >= 31 || paka < 0 ){
    alert("Invalid cat Marks");
} else if(mwisho >= 71 || mwisho < 0) {
    alert("Invalid final exams Marks");
} else if((paka + mwisho ) >= 80 && (paka + mwisho) <= 100){
    alert("You got a distinction");
} else if ((paka + mwisho) >= 60 && (paka + mwisho) <= 79){
    alert("you tried and got a credit");
} else if ((paka + mwisho) >= 40 && (paka + mwisho) <= 59){
    alert("you just passed");
} else if ((paka + mwisho) >= 0 && (paka + mwisho) <= 39){
    alert("please repeat the unit");
} 
// thursday 14th july
var userInput = prompt(`please choose your favourite color 
white
blue
red
green
`);
switch(userInput) {
    case "white":
        alert('You seem to be very peaceful');
        break;
    case "blue":
        alert('You seem to be very innovative');
        break;
    case "red":
        alert('You seem to be very dangerous');
        break;
    case "green":
        alert('You seem to be very social');
        break;
    default :
        alert('please choose a valid color')
    
}

const natesChainz = prompt(`please choose one the chains to win a prize
gold
silver
bronze
copper
metal`);

switch(natesChainz){
 case 'gold' :
    alert('you have been awarded 20ksh');
    break;
case 'silver' :
    alert('you have been awarded 70ksh');
    break;
case 'bronze' :
    alert('you have been awarded 500ksh');
    break;
case 'copper' :
    alert('you have been awarded 250ksh');
    break;
case 'metal' :
    alert('you have been awarded 2000ksh');
    break;
default:
    alert('please choose wisely')
}
const kukula = prompt(` Leo Utakula nini?
Rice 
Ugali
indomine
Cabbage
mrenda`)
switch(kukula){
    case 'rice':
        alert('Leo Utakula Rice na beans');
        break;
    case 'ugali':
        alert('Leo unakula ugali na nyama')
        break;
    case 'indomine':
        alert('Leo unakula indomine fala wewe')
        break;
    case 'cabbage':
        alert('Leo unakula ugali na cabbage')
        break;
    case 'mrenda':
        alert('Leo unakula ugali na mrenda')
        break;
    default:
        alert('chagua vizuri nani!')
}

//CLASS QUIZ

const toPay = prompt('Total Price')
    if(toPay >= 7000){
        const discount = toPay * (15 / 100);
        const total = toPay - discount;
        alert(`You have a discount of ${discount} you should pay ${total}`);
    }else if(toPay >= 5000 && toPay <= 6999){
        const discount = toPay * (10 / 100);
        const total = toPay - discount;
        alert(`You have a discount of ${discount} you should pay ${total}`);
    } else if (toPay >= 3000 && toPay <= 4999){
        const discount = toPay * (5 / 100);
        const total = toPay - discount;
        alert(`You have a discount of ${discount} you should pay ${total}`);
    }else if (toPay >= 1000 && toPay <= 2999){
        const discount = toPay * (2 / 100);
        const total = toPay - discount;
        alert(`You have a discount of ${discount} you should pay ${total}`);
    } else if (toPay <= 999 && toPay > 0){
        alert(`You have no discount pay ${toPay}`); 
    } else {
        alert('You have entered an invalid amount');
    }
