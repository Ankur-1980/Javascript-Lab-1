// empty array for longest names
let name = [];
for (let i = 0; i < 3; i++) {
	name.push(prompt('Enter a name'));
}

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
		const listNames = longNames.values();
		for (list of listNames) {
			console.log(list);
		}
		return longNames();
	}
}

console.log(longestName(name));
