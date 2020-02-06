"Ankur",
  "Clinton",
  "Jessica",
  "Mike",
  "Ed",
  "Chelsea",
  "Tom",
  "Cassly",
  "Laquita";

const name = [
  "Ankur",
  "Clinton",
  "Jessica",
  "Mike",
  "Ed",
  "Chelsea",
  "Tom",
  "Cassly",
  "Laquita"
];
const wholeArr = [];

function longestName(name) {
  let nameLength = 0;
  for (let i = 0; i < name.length; i++) {
    if (nameLength < name[i].length) {
      nameLength = name[i].length;
    }
  }
  for (let j = 0; j < name.length; j++) {
    if (name[j].length == nameLength) {
      wholeArr.push(name[j]);
    }
  }
  if (wholeArr.length === 1) {
    return wholeArr[0];
  } else {
    return wholeArr;
  }
}

console.log(longestName(name));
