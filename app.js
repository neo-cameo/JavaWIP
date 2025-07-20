// console.log('Hello World')
// console.log('Hello World'.length)
// /**
//  * 
//  */
// let fullName = 'Maceo'


// let celsius = 10
// let fahrenheit = celsius * 1.8 + 32
// console.log(fahrenheit)


// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//     console.log('show the video')
// }
// else if (loggedIn === true) {
//     console.log('tell user to upgrade their account')
// }
// else {
//     console.log('tell user to log into their account')
// }


// let cash = 50
// let price = 40
// let OpenStore = true

// if (cash >= price && OpenStore) {
//     console.log(`Here's your receipt and ${cash-price} dollars change`)
// }
// else if (cash === price && OpenStore) {
//     console.log("You paid the exact amount")
// }
// else {
//     console.log(`Don't give receipt`)
// }


// let money = 50
// let cost = 40
// let isStoreOpen = true

// if (money >= cost && isStoreOpen === true) {
//     console.log('print the receipt')
// }


// let subbed = false
// let login = true

// let str = subbed || login ? 'show the video' : 'hide the video'
// console.log(str)


// let count = 1

// while (count <= 100) {
//     console.log(count)
//     count = count + 1
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 ===0 && i % 5 === 0) {
//         console.log (`${i} -> Frontend Simplified`)
//     } 
//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if (i % 5 ===0) {
//         console.log (`${i} -> Simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }


// const str = "Frontend Simplified"

// for (let i=0; i<str.length; ++i) {
//     console.log(str [i])
// }

// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }

// welcomePersonToFES("Maceo", "Dingle")
// welcomePersonToFES("Mark", "Astra")
// welcomePersonToFES("John", "Legend")

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10))


// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = celsius * 1.8 + 32
//     return fahrenheit
// }

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// } 

// console.log(convertCelsiusToFahrenheit(0))

// let arr = [20, 30, 40, 50, 100]

// console.log(arr[0])
// console.log(arr[arr.length-1])

// arr.push (200)

// let newArr = arr.filter((element) => element < 50)

// console.log(newArr)

// let gradeSet1 = ['A+', 'A', 'FAIL']
// let gradeSet2 = ['FAIL', 'FAIL', 'B']
// let gradeSet3 = ['FAIL']

// let grade1 = gradeSet1.filter((element) => element !== 'FAIL')
// console.log(grade1)
// let grade2 = gradeSet2.filter((element) => element !== 'FAIL')
// console.log(grade2)
// let grade3 = gradeSet3.filter((element) => element !== 'FAIL')
// console.log(grade3)

// let goodGrades =[]
// for (let i=0; i < gradeSet1.length; ++i) {
//     if (gradeSet1[i] !== 'FAIL') {
//         goodGrades.push (gradeSet1[i])
//     }
// }
// console.log(goodGrades)


// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => 'dog')

// console.log(newArray)

let dollars = [1, 5, 10, 3]

// let cents = dollars.map((element) => (element*100))

// console.log(cents)

let cents = []
for (let i = 0; i < dollars.length; ++i) {
    cents.push (dollars[i]*100)
}

console.log(cents)

// let dollar2 = [0, 10, 20]

// let cent2 = dollar2.map((element) => {
//     return (element*100)
// })

// console.log(cent2)