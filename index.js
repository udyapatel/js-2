// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let day = 0;
// if(day === 0){
//   console.log('Sunday');
// }
// else if(day === 1){
//   console.log('Monday');
// }
// else if(day === 2){
//   console.log('Tuesday');
// }
// else if(day === 3){
//   console.log('Wednesday');
// }
// else if(day === 4){
//   console.log('Thrusday');
// }
// else if(day === 5){
//   console.log('Friday');
// }
// else if(day === 6){
//   console.log('Saturday');
// }
// else{
//   console.log('Invalid Day');
// }

//Switch Statement

// let day = 3;
// switch (day) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thrusday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
//   default:
//     console.log('Invalid day');
//     break;
// }
//while loop
// let i = 0;
// while(i<=10){

// console.log(i);
// }
//For loop
// for(let i=1; i<=10; i++){
// if(i=== 4){
//   console.log(i);
//   break;
// }
// console.log('vdsfvsjhdds');
// }
// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);