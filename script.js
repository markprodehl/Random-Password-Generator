// Add click listener to the generate password button
alert("To generate password press the Generate Password button");

function userChoice () {
    var numberOfChar = prompt("How many characters would you like your passwrod to contain?")
    if (numberOfChar < 8 || numberOfChar > 128) {
        alert("Password must be between 8 and 128 characters long");
    return;       
    }
    var specialChar = confirm("Click ok to confirm if you would like to include special characters");
    var numbers = confirm("Click ok to confirm if you would like to include numbers");
    var lowerCase = confirm("Click ok to confirm if you would like to include lowercase characters");
    var uppercase = confirm("Click ok to confirm if you would like to include uppercase characters");
}
   






// //let lowerCaseChars = lower case characters
// alert("Click Generate Password!")

// //When generate password button is clicked
// var generateButton = document.querySelector("#generate") 
// //Ask user to choose number of charatcters between 8 and 25

// for(var i = 0; )

// generateButton.addEventListener("click", function()) {
// alert("Choose a password between 8 and 128 characters");

// alert("Your password must be between ")

// }









// var lowerCaseChars = userChoice.toLowercasew












// <!-- <!-let lowerCaseChars = all the lowercase characters
//     let upperCaseChars = all the uppercase characters
//     let numberChars = all the number characters
//     let special = all the allowed special characters
//     When the user clicks generate
//     prompt user for number of chars
//     save result in variable called passwordLength
//     IF passwordLength is greater than 7 and less than 129
//       assign each of the following results to variables
//       let useNums = confirm user want to use numbers
//       let useLcase = confirm user wants lowercase characters
//       let useUcase = confirm user wants uppercase
//       let useSpecial = confirm user wants special chars
//       IF (useNums = true) OR (useLCase = true) OR (useUcase = true) OR (useSpecial = true)
//         call generate password
//         display the password
//       END IF

//     END IF
//     IF passwordLength is <= 7 or >= 129
//       alert user that password length needs to be 8 to 128
//     END IF
    
//     GENERATE PASSWORD
//     let password = an empty string
//     IF useLcase = true
//       randomly pick a lower case letter
//       add it to password
//     END IF