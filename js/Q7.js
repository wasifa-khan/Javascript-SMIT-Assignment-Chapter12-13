function convertTime() {
    var input = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));
    var hour = Math.floor(input / 100);
    var minutes = input % 100;
    var timePeriod;
  
    if (hour >= 0 && hour <= 11) {
      timePeriod = "AM";
    } else if (hour === 12) {
      timePeriod = "PM";
    } else if (hour >= 13 && hour <= 23) {
      hour -= 12;
      timePeriod = "PM";
    } else {
      console.log("Invalid time format");
      return; // exit the function if the time format is invalid
    }
  
    console.log("Converted time: " + hour + ":" + minutes.toString().padStart(2, "0") + " " + timePeriod);
  }
  
  convertTime();
  