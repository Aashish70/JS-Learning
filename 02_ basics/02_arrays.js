const marvel_heros = ["thor", "ironman", "hulk", "captain america", "spiderman", "black widow", "black panther", "antman", "wanda", "vision"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3])

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, 4, [5, 6, ], 7, [6, 7,[4,5]]]
// console.log(another_array)

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

const map = new Map();
console.log(map)

console.log(Array.isArray("Ashish")) // false
console.log(Array.from("Ashish")) // ["A", "s", "h", "i", "s", "h"]
console.log(Array.from({name: "Ashihs"})) // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]