let generatedNumber = null;

document.getElementById("generate-btn").addEventListener("click", function () {
  // Generate a random number (0-9 for 10 digits)
  generatedNumber = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
  document.getElementById("number-panel").classList.remove('blur');
  
  // Display the random number in the number panel
  document.getElementById("number-panel").textContent = generatedNumber;

  // Clear previous result
  document.getElementById("result").textContent = "";
});

document.getElementById("user-input").addEventListener("click", function () {

    document.getElementById("number-panel").classList.add('blur');
});

document.getElementById("compare-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value;

  // Hide the random number panel
  document.getElementById("number-panel").classList.remove('blur');
  
  // Compare numbers
  if (userInput === generatedNumber) {
    document.getElementById("result").textContent = "✅ Numbers match!,GOOD JOB.";
  } else {
    document.getElementById("result").textContent = "❌ Numbers do not match!";
  }
});


