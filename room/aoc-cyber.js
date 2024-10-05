document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Getting the user answers
    const answers = {
      q1: document.getElementById("q1").value.trim().toLowerCase(),
      q2: document.getElementById("q2").value.trim().toLowerCase(),
      q3: document.getElementById("q3").value.trim().toLowerCase(),
      q4: document.getElementById("q4").value.trim().toLowerCase(),
      q5: document.getElementById("q5").value.trim().toLowerCase()
    };
  
    // Correct answers
    const correctAnswers = {
      q1: "confidentiality integrity availability",
      q2: "encryption",
      q3: "phishing",
      q4: "vulnerability",
      q5: "distributed denial of service"
    };
  
    // Flag if all answers are correct
    let allCorrect = true;
  
    for (let key in correctAnswers) {
      if (answers[key] !== correctAnswers[key]) {
        allCorrect = false;
        break;
      }
    }
  
    // Display result
    const resultDiv = document.getElementById("result");
    if (allCorrect) {
      resultDiv.innerHTML = "Congratulations! Your flag is: <strong>CH{cyber-exploit}</strong>";
      resultDiv.style.color = "#2ea043";
    } else {
      resultDiv.innerHTML = "Oops! One or more answers are incorrect. Try again!";
      resultDiv.style.color = "#ff0000";
    }
  });