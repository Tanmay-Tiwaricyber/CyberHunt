// Answers key
const correctAnswers = {
    q1: 'HyperText Markup Language',
    q2: 'a',
    q3: 'h1',
    q4: 'title',
    q5: 'id'
  };
  
  // Function to check the quiz answers
  document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userAnswers = {
      q1: document.getElementById('q1').value.trim().toLowerCase(),
      q2: document.getElementById('q2').value.trim().toLowerCase(),
      q3: document.getElementById('q3').value.trim().toLowerCase(),
      q4: document.getElementById('q4').value.trim().toLowerCase(),
      q5: document.getElementById('q5').value.trim().toLowerCase()
    };
  
    // Check if all answers are correct
    let allCorrect = true;
    for (const key in correctAnswers) {
      if (userAnswers[key] !== correctAnswers[key].toLowerCase()) {
        allCorrect = false;
        break;
      }
    }
  
    // Display result
    const resultDiv = document.getElementById('result');
    if (allCorrect) {
      resultDiv.textContent = "Congratulations! Here's your flag: CH{html-completed}";
      resultDiv.style.color = '#2ea043';
    } else {
      resultDiv.textContent = "Oops! Some answers are incorrect. Try again!";
      resultDiv.style.color = '#ff6e6e';
    }
  });