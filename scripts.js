// let name = [
//   "Ankur",
//   "Grace",
//   "Janna",
//   "Mike",
//   "Cassly",
//   "Cecelia",
//   "Clinton",
//   "Jessica"
// ];

let plorp = ["Ankur", "Clinton", "Jessica", "Chelsea", "Janna", "Mike", "Ed"];

let longest = plorp.reduce((a, b) => (a.length > b.length ? a : b), "");

console.log(longest);
