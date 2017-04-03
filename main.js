// Sal DeMarco
//4-8-2015

// Delare CONSTANT Varibles
var YEAR = 18;
STATE_LENGTH = 2;
ZIP_LENGTH = 5;

function checkInput() {
	var answer = true;
	var state = document.getElementById("state").value,
	    stLength = state.length;
	var upCase = document.getElementById("state").value,
	    chkUpCase = upCase.toUpperCase();
	var zip = document.getElementById("zip").value,
	    zipLength = zip.length;

//check to see that no GUI is left empty
	if (document.getElementById("firstName").value == "" || 
	document.getElementById("lastName").value == "" || 
	document.getElementById("city").value == "" || 
	document.getElementById("state").value == "" || 
	stLength != STATE_LENGTH || 
	state != chkUpCase || 
	zipLength != ZIP_LENGTH || 
	isNaN(zip) || 
	document.getElementById("zip").value == "" || 
	document.getElementById("year").value == "" || 
	document.getElementById("dayListing").value == "Select Day" || 
	document.getElementById("monthListing").value == "Select Month" || 
	document.getElementById("creditNum").value == "" || 
	document.getElementById("security").value == "" || 
	document.getElementById("type").value == "Select Card") {
		answer = false;
	}
	return answer;
}

function populateDate(a, b, c, d, e) {
	var selectMonth = document.getElementById(d);
	var startMonth = a;
	var endMonth = b;

	var selectDay = document.getElementById(e);
	var startDay = a;
	var endDay = c;

//dropbox for days and months
	for (var i = startMonth; i < startMonth + endMonth; i++) {
		var obj = document.createElement("option");
		obj.text = i;
		obj.value = i;
		selectMonth.appendChild(obj);
	}

	for (var y = startDay; y < startDay + endDay; y++) {
		var obj1 = document.createElement("option");
		obj1.text = y;
		obj1.value = y;
		selectDay.appendChild(obj1);
	}
}

function checkAge() {
	
	var answer = true;

	var now = new Date();
	var currentYear = now.getFullYear();
	var currentMonth = now.getMonth() + 1;
	var currentDay = now.getDate();

	var userYear = 0;
	var userDay = 0;
	var userMonth = 0;

	userYear = currentYear - document.getElementById("year").value;
	userDay = document.getElementById("dayListing").value;
	userMonth = document.getElementById("monthListing").value;

// check to see if user is 18
	if (YEAR == userYear && userDay == currentDay && currentMonth == userMonth) { answer;
	} else if (userYear > YEAR) { answer;
	} else if (userYear >= YEAR && userMonth <= currentMonth && userDay <= currentDay) { answer;
	} else {
		answer = false;
	}

	return answer;
}

function checkNum() {

	var lengthNum = document.getElementById("creditNum").value;
	var sum = 0;
	var a,
	    b;

	// collect each digit and multiply by 2 for the even numbers then add odd/even numbers 
	for ( i = 0; i < lengthNum.length; i++) {
		var checkDigits = parseInt(lengthNum.charAt(i));
		if (i % 2 == 0) {
			checkDigits *= 2;
			if (checkDigits > 9) {
				a = parseInt(checkDigits.toString().substr(0, 1));
				b = parseInt(checkDigits.toString().substr(1));

				checkDigits = a + b;
			}
		}

		sum = checkDigits + sum;
	}
	// return true or false
	if (sum != 0 && sum % 10 == 0) {
		return true;
	} else {
		return false;
	}
}

function checkType() {

	var checkCVVNum = lengthNum = document.getElementById("security").value;
	var card = document.getElementById("type").value;
	checkCVVNum = checkCVVNum.length;

// if the cards' CVV has 3 digits and last card has 4'
	if (checkCVVNum == card) {
		return true;
	} else {
		return false;

	}
}

function checkCVV() {
	var lengthNum = document.getElementById("security").value;
	
	//grads the 6th digit in the credit number
	var match = document.getElementById("creditNum").value.toString().substr(5, 1);

	var checkDigits = 0;
	var a = 0,
	    b = 0;

	// adds the first digits in CVV to see if it matches the 6th digit in card number

	a = parseInt(lengthNum.toString().substr(0, 1));
	b = parseInt(lengthNum.toString().substr(1, 1));
	match = parseInt(match);
	checkDigits = a + b;

	if (match == checkDigits) {
		return true;
	} else {
		return false;
	}
}

function validate() {
	
	// validates all for true to process correct info
	if (checkInput() && checkAge() && checkCVV() && checkNum() && checkType()) {
		alert("Valid!");
	} else {
		alert("Invalid Data!");
	}

}