names;
"Ankur",
  "Clinton",
  "Jessica",
  "Mike",
  "Ed",
  "Chelsea",
  "Tom",
  "Cassly",
  "Laquita";

// array of names
const name = ['Ankur', 'Clinton', 'Jessica'];
// empty array for longest names
const longNames = [];

// create function
function longestName(name) {
	// initialize
	let nameLength = 0;
	//   look for length of names, if they are less than i go up by one
	for (let i = 0; i < name.length; i++) {
		// find the longest name
		if (nameLength < name[i].length) {
			nameLength = name[i].length;
		}
	}
	// look for names of a certain length
	for (let j = 0; j < name.length; j++) {
		// if the length of a name is equal to the length of the longest name add it to longNames array
		if (name[j].length == nameLength) {
			longNames.push(name[j]);
		}
	}

	// if longNames array only has one value, return the first item in the array
	if (longNames.length === 1) {
		return longNames[0];
		// If there is more than one item in the array, return the whole array
	} else {
		return longNames;
	}
}

console.log(longestName(name));
