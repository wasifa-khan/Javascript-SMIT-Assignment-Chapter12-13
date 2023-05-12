let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

  if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
  } else {
    console.log("Both integers are equal");
  }