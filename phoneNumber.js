// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const re = /^\(\d{3}\)[-\s]\d{3}[-\s]\d{4}$/;

function testPhoneNumber(num) {
	if (re.test(num) == true) {
		return true;
	} else {
		return false;
	}
}

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

function parsePhoneNumber(num) {

	const myRe = /\d{3,4}/g;
	let getDigits = [];

	// Use exec to get matching patterns of 3-4 digits
	while ((myArray = myRe.exec(num)) !== null) {
		getDigits.push(myArray[0])
	};

	// Create contact Object for areaCode and phoneNumber by concatenating 
	let contact = {
		areaCode: getDigits[0],
		phoneNumber: getDigits[1].concat(getDigits[2]),
	};

	return contact;
}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}