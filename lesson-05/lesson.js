// let arr = [1, 2, 3];
// console.log(arr[1]);
// arr[2] = 0;
// arr.push(34, 524);
// arr.unshift();
// arr.pop();
// arr.shift();

// let numbers = [1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++);
// console.log(numbers[i]);


// Object (key: value, value, ...);
// let person = {
//     name: "Nguyễn Trung Hiếu",
//     age: 18,
//     address: "590 Cách Mạng Tháng Tám",
//     school: "Swinburne Vietnam",
//     color: ["blue", "orange"],
//     skill: ["JS", "Golang", "Python", "Java"],
//     company: {
//         name: "ZaloPay",
//         address: "HCM",
//     }
// };

// for (let key in person) {
//     console.log(person[key]);
// }


// define animal

let animal = {
    name: "Momo",
    age: 3,
    color: "Brown-White",
    favoriteFood: "Steak",
    hobby: "go to playground",
    gender: "",
    owner: {
        name: "Trung Hieu",
        age: 18,
        job: "university student",
    }
};
delete animal.gender;
animal.owner.languages = ["Vietnamese", "English"];
// delete animal.gender;
console.log(animal);

const data = {
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [
          {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
          },
          {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
          },
          {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
          },
          {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
          },
          {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
          },
          {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
          }
        ],
        "support": {
          "url": "https://reqres.in/#support-heading",
          "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
}

let users = data["data"];
let total = data["total"];
let text = data["support"]["text"];
console.log(users);
console.log(total);
console.log(text);

let emails = [];

for(let x in users){
    console.log(users[x]["email"]);
    emails.push(users[x]["email"])
}

console.log(emails);

for (let user of users) {
    let email = user["email"];

}

let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"];

pokemon.stats.speed = 60;

pokemon.stats.skill = pikachuSkill;

delete pokemon.stats.belongTo;

console.log(pokemon);