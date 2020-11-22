
/*


The function will return two value 
// If 					Return 

""						false
emailtest@emailtest@us.org		false
emailtest@us.org	 		true
abcdefg.org					false
21212323				false

*/


//This file test an external function from the email validation that located in another file called app file. 

let validation = require("../app/emailValidationFunction.js");

let assert = require ('chai').assert; 

describe('email Validation ', function(){

it('Empty string should fail', function(){
	let returnValue = validation.emailValidationFunction(""); // empty string --- false 
	assert.equal(returnValue, false);
});

it('two @ should fail', function(){
	let returnValue = validation.emailValidationFunction('emailtest@emailtest@us.org'); // email with @_@ - false 
	assert.equal(returnValue, false);
});


it('Regular format with one @ and .xxx should pass', function(){
	let returnValue = validation.emailValidationFunction('emailtest@us.org'); // regular format with one @ - true
	assert.equal(returnValue, true);
});

it('Only letters should return false', function(){
	let returnValue = validation.emailValidationFunction('abcdefg.org'); // Letters only will return- false
	assert.equal(returnValue, false);
});

it('Only numbers should return false', function(){
	let returnValue = validation.emailValidationFunction('21312131212'); // only Numbers - false
	assert.equal(returnValue, false);
});

});