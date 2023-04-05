// var name = prompt("Please enter your name:");
// let gender = prompt("Please enter your gender (male or female):");
// let age = prompt("Please enter your age:");
// let skipWel = confirm("Do you want to skip the welcoming message?");

// if (age <= 0) {
//   alert("Invalid age. Please enter a correct value.");
// } else {
//   var title;
//   if (gender === "male") {
//     title = "Mr";
//   } else if (gender === "female") {
//     title = "Ms";
//   }
  
//   let message;
//   if (skipWel) {
//     message = "Welcome!";
//   } else if (gender === "male" || gender === "female") {
//     message = "Welcome, " + title + " " + name + "!";
//   } else {
//     message = "Welcome, " + name + "!";
//   }
  
//   alert(message);
// }

let name = prompt("Enter your name:");
let gender = prompt("Enter your gender (male or female):");
let age = prompt("Enter your age:");

if (age <= 0) {
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
// const questions = [
//   "Do you like dogs?",
//   "Have you ever traveled abroad?",
//   "Do you enjoy spicy food?"
// ];

// const answers = [];

// function yesNoQuestion(prompt) {
//   let answer = prompt;
//   while (answer !== 'yes' && answer !== 'no') {
//     console.log('Invalid input. Please enter yes or no.');
//    
//   }
//   return answer;
// }

// for (let i = 0; i < questions.length; i++) {
//   const answer = yesNoQuestion(prompt(questions[i]));
//   answers.push(answer);
// }

// console.log("Answers:");
// for (let i = 0; i < answers.length; i++) {
//   console.log(`${questions[i]} ${answers[i]}`);
// }
//----------------------------------------------------------------------
//----------------------------------------------------------------------

const answers = getAnswer(3);
for (let i=0 ; i<answers.length ; i++) {
  console.log(answers[i]);
}

function getAnswer(questionsNum) {
  const answers = [];
  for (let i = 1; i <= questionsNum; i++) {
    let yesNoAnswer = prompt(`Question ${i}: (yse / no)`);
    if (yesNoAnswer !== 'yes' && yesNoAnswer !== 'no' || yesNoAnswer ==="") {
     answers.push('Invalid');
    }
    else{
    answers.push(yesNoAnswer);
    }
  }
  return answers;
}




