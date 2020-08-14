var passwordText = document.querySelector("#password");
// Assignment Code
var generateBtn = document.querySelector("#generate");

// console.log(generateBtn);

function generatePassword() {
  // code to be ran
  // var lowercase = confirm("do you want lowercase?")
  // var numbers = confirm("do you want numbers?")
  // console.log(lowercase)
  console.log('generatePassword is running')
  var pwcharacters = []
  if (confirm("do you want lowercase?")) {
    pwcharacters = pwcharacters.concat(["a", "b", "c", "d", "e", "f","g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s"])
    console.log('hello')
    // use lowercase  
  }
  if (confirm("do you want uppercase?")) {
    pwcharacters = pwcharacters.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L","M", "O", "P", "Q", "R","S"])
    console.log('hello')
    // use lowercase  
  }
  if (confirm("do you want numbers?")) {
    // use numbers  
   pwcharacters = pwcharacters.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  }
  if (confirm("do you want special characters?")) {
    // use numbers  
    pwcharacters = pwcharacters.concat(["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", '^', "_", "`", "{", "|", "}","~"])
  }
  if (confirm("would you like a 10 character pw?")) {
    // use numbers  
    pwcharacters = pwcharacters.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  
   }
  // user will decide length of pw
  var passwordLength = 10
  var password = ''
  console.log(pwcharacters)
  //  for 10 times we are going to add random character from pw characters to pw
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * pwcharacters.length)
    password += (pwcharacters[index])
  } console.log(password)
  passwordText.value = password;

}


// Write password to the #password input
function writePassword() {event.preventDefault();
  console.log('writePassword is running')
  var password = generatePassword();
  console.log('writePassword is running2')

  console.log(password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  generatePassword();
});
