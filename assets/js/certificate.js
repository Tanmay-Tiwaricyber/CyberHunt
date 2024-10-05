function generateCertificate() {
    // Get the user's name and points from localStorage
    const userName = localStorage.getItem('userName') || 'Participant'; // Default to 'Participant' if no name is found
    const userPoints = localStorage.getItem('userPoints') || 0; // Default points to 0 if not found
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');

    // Make canvas visible
    canvas.style.display = 'block';

    // Background color
    ctx.fillStyle = '#f9f9f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Certificate border
    ctx.strokeStyle = '#1e90ff';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Certificate title
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = '#1e90ff';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Achievement', canvas.width / 2, 100);

    // Award text
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(`This certifies that`, canvas.width / 2, 180);
    ctx.fillText(userName, canvas.width / 2, 230);  // Use the fetched user name

    // Message with points
    ctx.font = '20px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText(`has successfully completed the CyberHunt CTF`, canvas.width / 2, 280);
    ctx.fillText(`with ${userPoints} points earned.`, canvas.width / 2, 310);

    // Date
    const completionDate = new Date().toLocaleDateString();
    ctx.fillText(`Completion Date: ${completionDate}`, canvas.width / 2, 400);

    // Display the certificate as an image
    const img = document.getElementById('certificate-image');
    img.src = canvas.toDataURL();
    img.style.display = 'block';
}
