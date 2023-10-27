// Soccer Standings (functions, strings, arrays, objects)
// Create a function getTotalPoints that accepts a results string with ‘w’ for a win, ‘l’ for a loss, ‘d’ for a draw.  
// i.e. this could be passed in for the Sounders July results: “wddwww”

// [done] This function will calculate the total number of points for a team (add 3 for each win, 1 for each tie, 0 for each loss).  
// I have provided a getPointsFromResult function to help you with this, you can call this method for each result.

// ********!!!Complete orderResults function.  This accepts unlimited team objects { name, results }, and logs the team name & points
// ********!!! Wrap everything in an IIFE to keep the variables out of the global scope 

// Hints:

// [done] Use string.split to convert a string to an array (use an empty string to separate every single character).  So 'wwld'.split('') will give you ['w', 'w', 'l', 'd']
// [done] Use array.forEach with a function to get the number of points from a result and add to the running total
// [done] Use arguments variable in orderResults function to get all of the arguments.
// [done] Use Array.from(arguments) to convert the arguments object to an array
// [done] Use forEach method to run a function on each item in the array


// ----------------

(function functionName() {

	const RESULT_VALUES = {
		w: 3,
		d: 1,
		l: 0
	}

	/**
	 * Takes a single result string and (one of 'w', 'l', or 'd') 
	 * and returns the point value
	 * 
	 * @param {string} result 
	 * @returns {number} point value
	 */
	const getPointsFromResult = function getPointsFromResult(result) {
		return RESULT_VALUES[result];
	}

	// Create getTotalPoints function which accepts a string of results
	// including wins, draws, and losses i.e. 'wwdlw'
	// Returns total number of points won

	function getTotalPoints(results) {
		let resultArr = [];
		resultArr = results.split('');
		// let wins =0, draws=0, losses = 0, 
		let total = 0;

		resultArr.forEach(val => {
			// if (val == "w") {
			// 	wins +=3;
			// } else if (val== "d") {
			// 	draws += 1;
			// } 
			// total = wins + draws

			total += getPointsFromResult(val)
		});

		return total
	}

	// Check getTotalPoints
	console.log(getTotalPoints('wwdl')); // should equal 7

	// create orderTeams function that accepts as many team objects as desired, 
	// each argument is a team object in the format { name, results }
	// i.e. {name: 'Sounders', results: 'wwlwdd'}
	// Logs each entry to the console as "Team name: points"

	function orderTeams(...args) {
		// args = Array.from(arguments)

		args.forEach(team => {
			teamName = team.name;
			teamPoints = getTotalPoints(team.results);
			console.log(`${(teamName)}: ${(teamPoints)}`);
		})
	}


	// Check orderTeams
	orderTeams(
		{ name: 'Sounders', results: 'wwdl' },
		{ name: 'Galaxy', results: 'wlld' }
	);
	// should log the following to the console:
	// Sounders: 7
	// Galaxy: 4


})()