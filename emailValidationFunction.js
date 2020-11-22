
//Javascript function document

// This file has the testing function that will be tested in the test file after importing it with require and the location of this function.



let validation = {};
validation.emailValidationFunction = function(inValue){
    let re =/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return re.test(inValue);
};


module.exports = validation;



  
 