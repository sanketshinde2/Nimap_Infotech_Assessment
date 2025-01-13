function SimplePassword(str) {
  // _define-ocg_ - Variable to store the results of each filter
  var varFiltersCg = {
    hasUpper: false,
    hasNumber: false,
    hasSymbol: false,
    noPassword: true,
    lengthValid: false,
  };

  // Check for uppercase letter
  varFiltersCg.hasUpper = /[A-Z]/.test(str);

  // Check for number
  varFiltersCg.hasNumber = /\d/.test(str);

  // Check for punctuation or symbol
  varFiltersCg.hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);

  // Check for the word "password"
  varFiltersCg.noPassword = !str.toLowerCase().includes("password");

  // Check for length
  varFiltersCg.lengthValid = str.length > 7 && str.length < 31;

  // Check if all conditions are met
  var varOcg = 
    varFiltersCg.hasUpper &&
    varFiltersCg.hasNumber &&
    varFiltersCg.hasSymbol &&
    varFiltersCg.noPassword &&
    varFiltersCg.lengthValid;

  return varOcg ? "true" : "false";
}

// keep this function call here
console.log(SimplePassword(readline()));