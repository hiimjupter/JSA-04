// Bài 1
// let inventory = {
//     gold: 500,
//     pouch: ["flint", "twine", "gemstone"],
//     backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
// }
// // yêu cầu 1
// inventory.pocket = ["seashell", "strange", "lint"];

// // yêu cầu 2

// // cách 1: let remove = inventory.backpack.splice(1, 1);

// // cách 2:
// for (let i = 0; i < inventory.backpack.length; i++) {
//     if (inventory.backpack[i] === "dagger") {
//         inventory.backpack.splice (i, 1);
//     }
// }

// // yêu cầu 3
// inventory.gold = inventory.gold + 50;

// // yêu cầu 4
// inventory.pouch.length = 0;

// console.log(inventory);
// Bài 2
// let arr1 = [
//     {name: 'John',  age: 21, budget: 23000}, 
//     {name: 'Steve',  age: 32, budget: 40000}, 
//     {name: 'Martin',  age: 16, budget: 2700},
// ]
// let arr2 = [
//     {name: 'John',  age: 21, budget: 29000}, 
//     {name: 'Steve',  age: 32, budget: 32000}, 
//     {name: 'Martin',  age: 16, budget: 1600},
// ]

// let person = prompt("Please choose 1 or 2");
// if (person === "1") {
//     let resultArray = [];

// for (money of arr1) {
//     resultArray.push(money.budget);
// }
// console.log(resultArray);

// const reducer = (budget, currentValue) => {
//     return budget + currentValue;
// };

// let getBudgets = resultArray.reduce(reducer, 0);

// console.log(getBudgets);
// }
// else {
//     let resultArray = [];

// for (money of arr2) {
//     resultArray.push(money.budget);
// }
// console.log(resultArray);

// const reducer = (budget, currentValue) => {
//     return budget + currentValue;
// };

// let getBudgets = resultArray.reduce(reducer, 0);

// console.log(getBudgets);
// }




// Bài 3
// function greeting () {
//     const GUEST_LIST = {
//         Randy: "Germany",
//         Karla: "France",
//         Wendy: "Japan",
//         Norman: "England",
//         Sam: "Argentina",
//     }
//     let answer = prompt("Greeting, can I have your name please?");
//     for (let name in GUEST_LIST) {
//         if (answer === name) {
//             console.log("Hi! I'm "+name+", and I'm from "+GUEST_LIST.name+".");
//         }
//         else {console.log("Hi! I'm a guest.")
//         }
//     }
// }
// greeting();






// Bài 4.1
// function output(obj) {
//     const keysAndValues = {
//         a: 1,
//         b: 2,
//         c: 3,
//     }
//     let arr = [];
//     let aarr = [];
//     for (let answer in keysAndValues) {
//         arr.push(answer);
//         aarr.push(keysAndValues[answer]);
//     }
//     console.log(arr);
//     console.log(aarr);
// }
// output();








// Bài 4.2
// function output(obj) {
//     const keysAndValues = {
//         a: "Apple",
//         b: "Microsoft",
//         c: "Google",
//     }
//     let arr = [];
//     let aarr = [];
//     for (let answer in keysAndValues) {
//         arr.push(answer);
//         aarr.push(keysAndValues[answer]);
//     }
//     console.log(arr);
//     console.log(aarr);
// }
// output();



// Bài 4.3
// function output(obj) {
//     const keysAndValues = {
//         key1: true,
//         key2: false,
//         key3: undefined,
//     }
//     let arr = [];
//     let aarr = [];
//     for (let answer in keysAndValues) {
//         arr.push(answer);
//         aarr.push(keysAndValues[answer]);
//     }
//     console.log(arr);
//     console.log(aarr);
// }
// output();



// Bài 5
// function output (obj) {
//     const inkLevels = {
//         "cyan": 23,
//         "magenta": 12,
//         "yellow": 10,
//     }
//     let arr = [];
//     for (let max in inkLevels) {
//         arr.push(inkLevels[max]);
//     }
//     console.log(arr);
//     if (arr[0] < arr [1] && arr[0] < arr[2]) {
//         console.log(arr[0]);
//     }
//     else if (arr[1] < arr [0] && arr[1] < arr[2]) {
//         console.log(arr[1]);
//     }
//     else {
//         console.log(arr[2]);
//     }
// }
// output();
// làm tương tự với 2 trường hợp dưới