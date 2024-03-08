// Dates

let myDate = new Date();
// console.log(myDate);

// console.log(typeof myDate);


// console.log(myDate.toString())  // Sat Jul 24 2021 12:00:00 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     // Sat Jul 24 2021
// console.log(myDate.toLocaleString()); // 24/07/2021, 12:00:00


let myCreatedDate = new Date(2023, 0, 23) 
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)  
let myCreatedDate3 = new Date("2023-01-14")


let myCreateDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime()) 
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())  

newDate.toLocaleString('default',{
    weekday : 'long',
})