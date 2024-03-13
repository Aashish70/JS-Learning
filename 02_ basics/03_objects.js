//singleton
//Object.create

//Object literals

const mySum = Symbol("key1")

const JsUser ={
    name: "Ashish",
    "full name": "Ashish Kumar",
    [mySum]: "myKey1",
    age: 23,
    location: "India",
    email: "ashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])/

JsUser.email = "ashish@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ashish@microsoft.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello, I am Ashish Kumar")
}


JsUser.greetingTwo = function(){
    console.log(`hello, Js User ${this.name}`)
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())