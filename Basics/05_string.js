const name = "suraj"
const age = 21

//console.log(name + age + "hello");   //traditional method, not used widely

console.log(`Hello my name is ${name} and my age is ${age}`);

const gamename = new String(`Suraj-singh-rajput`)
// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('r'));
const newString = gamename.substring(0, 3)
console.log(newString);

const anotherString = gamename.slice(-3, 3)
console.log(anotherString);

const newStringone = "    Suraj    "
console.log(newStringone);
console.log(newStringone.trim());  // trim removes the unwanted character(space) from string

const url = "https://suraj.com/suraj%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('suraj'));

console.log(gamename.split('-'));
