// Assign IIFE to new variable to store return value (orderResults function)
const orderResults = (function () {

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
		let totalPoints = 0;

		// Split string of results into individual letters
		let resultArr = [];
		resultArr = results.split('');

		// Get points frorm letters
		resultArr.forEach(val => {
			totalPoints += getPointsFromResult(val)
		});

		return totalPoints;
	}

	// Check getTotalPoints
	console.log(getTotalPoints('wwdl')); // should equal 7

	// Create orderResults function that accepts as many team objects as desired, 
	// each argument is a team object in the format { name, results }
	// i.e. {name: 'Sounders', results: 'wwlwdd'}
	// Logs each entry to the console as "Team name: points"

	function orderResults(...args) {
		// args = Array.from(arguments)

		args.forEach(team => {
			teamName = team.name;
			teamPoints = getTotalPoints(team.results);
			console.log(`${teamName}: ${teamPoints}`);
		})

	}

	// Return orderResults function (export outside IIFE)
	return orderResults

})();

// Call variable orderResults (which returns orderResults function)
orderResults(
	{ name: 'Sounders', results: 'wwdl' },
	{ name: 'Galaxy', results: 'wlld' }
)
// should log the following to the console:
// Sounders: 7
// Galaxy: 4
