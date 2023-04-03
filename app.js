let name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender (male or female):");
let age = prompt("Please enter your age:");
let skipWelcome = confirm("Do you want to skip the welcoming message?");

if (age <= 0) {
  alert("Invalid age. Please enter a positive value.");
} else {
  let title;
  if (gender === "male") {
    title = "Mr";
  } else if (gender === "female") {
    title = "Ms";
  }
  
  let message;
  if (skipWelcome) {
    message = "Welcome!";
  } else if (gender === "male" || gender === "female") {
    message = "Welcome, " + title + " " + name + "!";
  } else {
    message = "Welcome, " + name + "!";
  }
  
  alert(message);
}
