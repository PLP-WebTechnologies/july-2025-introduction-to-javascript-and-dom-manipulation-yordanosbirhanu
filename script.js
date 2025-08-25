// ==================================
// Part 1: JavaScript Basics
// ==================================

// Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "You are eligible to vote ✅";
  } else if (age > 0) {
    result = "You are too young to vote ❌";
  } else {
    result = "Please enter a valid age!";
  }

  document.getElementById("ageResult").textContent = result;
});


// ==================================
// Part 2: Functions
// ==================================

// Function 1: Greeting
function showGreeting(name) {
  document.getElementById("greetingOutput").textContent = "Hello, " + name + "! 🎉";
}

// Function 2: Simple calculator
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 and 7 is:", calculateSum(5, 7));


// ==================================
// Part 3: Loops
// ==================================

// Example 1: for loop
document.getElementById("listNumbersBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// ==================================
// Part 4: DOM Manipulation
// ==================================

// Interaction 1: Toggle dark mode
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Interaction 2: Create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.getElementById("dynamicDiv").appendChild(newPara);

// Interaction 3: Event Listener to update content
newPara.addEventListener("click", function () {
  newPara.textContent = "You clicked me! 🔥";
});
