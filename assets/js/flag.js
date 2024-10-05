// Sample user data (replace with real user data)
let user = {
    name: 'John Doe',
    points: 0,
    submittedFlags: []
};

// Total number of challenges
const totalChallenges = 4; // Update this number if you add more challenges

// Predefined flags and points for each challenge
const flags = {
    1: "html_flag_123",
    2: "python_flag_456",
    3: "html_advanced_flag_789",
    4: "python_hidden_flag_012"
};

const points = {
    1: 100,
    2: 200,
    3: 150,
    4: 250
};

// Update user's name and points in the HTML
document.getElementById("user-name").textContent = user.name;
document.getElementById("user-points").textContent = user.points;

function submitFlag(challengeId) {
    // Get the user input and trim any extra spaces
    const userInput = document.getElementById(`flag-input-${challengeId}`).value.trim();

    // Check if the user has already submitted the flag for this challenge
    if (user.submittedFlags.includes(challengeId)) {
        alert('Flag already submitted for this challenge!');
        return;
    }

    // Validate user input against the predefined flags
    if (userInput === flags[challengeId]) {
        alert('Correct flag! Points awarded: ' + points[challengeId]);

        // Add the challenge to the submittedFlags list
        user.submittedFlags.push(challengeId);

        // Update user's points
        updateUserPoints(points[challengeId]);

        // Disable input and button after successful submission
        document.getElementById(`flag-input-${challengeId}`).disabled = true;
        document.querySelector(`#challenge-${challengeId} button`).disabled = true;
    } else {
        alert('Incorrect flag. Please try again.');
    }
}

function updateUserPoints(pointsEarned) {
    // Update user's points and display in the UI
    user.points += pointsEarned;
    document.getElementById("user-points").textContent = user.points;

    // Check if all challenges are completed
    if (user.submittedFlags.length === totalChallenges) {
        alert('Congratulations! You’ve completed all challenges.');
        generateCertificate(); // Call the function to generate the certificate
    }
}

// Function to generate and download the certificate upon completion
function generateCertificate() {
    const userName = user.name;
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Draw background for the certificate
    ctx.fillStyle = '#f4f4f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw certificate title
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = '#1e90ff';
    ctx.fillText('CyberHunt CTF Certificate', canvas.width / 2, 100);

    // Draw awarded name
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('Awarded to: ' + userName, canvas.width / 2, 250);

    // Draw points achieved
    ctx.font = '20px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('Points: ' + user.points, canvas.width / 2, 300);

    // Draw date of completion
    const currentDate = new Date().toLocaleDateString();
    ctx.fillText('Date: ' + currentDate, canvas.width / 2, 350);

    // Download the certificate as an image
    const link = document.createElement('a');
    link.download = `certificate_${userName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    alert('Certificate generated and downloaded!');
}
