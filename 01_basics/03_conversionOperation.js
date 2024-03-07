let score = "Ashish"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// 33abc => NaN
// true => 1
// false => 0


let isLoggedIn = "Ashish"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)  // true


// 1 => true 
// 0 => false
// "" => false
// "ashish" => true

let someNumber = 35

let stringNumber = String(someNumber)
// console.log(stringNumber) // "35"
// console.log(typeof stringNumber) // "string"


// ********************* Operations *********************

let value = 3
let negValue = -value
// console.log(negValue) // -3 

// console.log(3 + 4) // 7
// console.log(3 - 4) // -1
// console.log(3 * 4) // 12
// console.log(3 / 4) // 0.75
// console.log(3 % 4) // 3
// console.log(3 ** 4) // 81


let string = "Ashish"
let anotherString = "Kumar"

let fullName = string + " " + anotherString
// console.log(fullName) // "Ashish Kumar"

// console.log(2 + "3") // "23"
// console.log("2" + 3) // "23"
// console.log("1" + 2 + 2) // "122"
// console.log(1 + 2 + "2") // "32"

// console.log(2 - "3") // -1
// console.log("2" - 3) // -1
// console.log("1" - 2 - 2) // -3
// console.log(1 - 2 + "2") // "-12"

// console.log(2 * "3") // 6
// console.log("2" * 3) // 6
// console.log("1" * 2 * 2) // 4
// console.log(1 * 2 + "2") // "22"

// console.log(2 / "3") // 0.6666666666666666
// console.log("2" / 3) // 0.6666666666666666
// console.log("1" / 2 / 2) // 0.25
// console.log(1 / 2 + "2") // "0.52"

// console.log(2 % "3") // 2
// console.log("2" % 3) // 2
// console.log("1" % 2 % 2) // 1
// console.log(1 % 2 + "2") // "12" 

 
// console.log(( 3 + 4 ) * 5 % 3)  // 2

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter) // 101


// console.log(+true)

// console.log(-true)

//link to study
//https://tc39.es/ecma262/multipage/ecmascript-language-types.html#sec-ecmascript-language-types-number-type


// console.log(+"") // 0

// console.log(-"") // -0

// console.log(+"ashish") // NaN

// console.log(-"ashish") // NaN

// console.log(+"33") // 33

// console.log(-"33") // -33

// console.log(+"33abc") // NaN

// console.log(-"33abc") // NaN

// console.log(+"0") // 0

// console.log(-"0") // -0

// console.log(+"false") // NaN

// console.log(-"false") // NaN

// console.log(+"true") // NaN

// console.log(-"true") // NaN

// console.log(+"Infinity") // Infinity

// console.log(-"Infinity") // -Infinity

// console.log(+"-Infinity") // -Infinity

// console.log(-"-Infinity") // Infinity

// console.log(+"-0") // -0

// console.log(-"-0") // 0

// console.log(+"-0.0") // -0

