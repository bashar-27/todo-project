function Welcome() {
  let name = prompt("Enter your name:");
  let gender = prompt("Enter your gender (male or female):");
  let age = prompt("Enter your age:");

  if (validAge(age)) {
    alert("Invalid age. Please enter a valid age.");
  } else {
    let skip = confirm("Do you want to skip the welcoming message?");
    if (!skip) {
      if (gender == "male") {
        alert("Welcome, Mr. " + name);
      } else if (gender == "female") {
        alert("Welcome, Ms. " + name);
      } else {
        alert("Welcome, " + name);
      }
    }
  }
}

function validAge(age) {
  return age < 0;
}
function getAnswer(questions) {
  const answers = [];
  for (let i = 0; i < questions.length; i++) {
    let yesNoAnswer = prompt(`Question ${i}: ${questions[i]} (yse / no)`);
    if ((yesNoAnswer !== "yes" && yesNoAnswer !== "no") || yesNoAnswer === "") {
      answers.push("Invalid");
    } else {
      answers.push(yesNoAnswer);
    }
  }
  return answers;
}

Welcome();
const questions = [
  "Are you married?",
  "Are you a football fan?",
  "Are you a programmer?",
];
const answers = getAnswer(questions);
for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}
