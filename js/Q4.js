function isVowel(character) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toLowerCase());
  }
  
  var input = prompt("Enter a character:");
  var result = isVowel(input);
  
  console.log("Is the character a vowel? " + result);
  