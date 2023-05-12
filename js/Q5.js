var correctPassword = "Secret123"; // Store the correct password 
  var userPassword = prompt("Enter your password:");

  if (!userPassword) {
    console.log("Please enter your password");
  } else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
  } else {
    console.log("Incorrect password");
  }