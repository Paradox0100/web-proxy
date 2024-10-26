function submit() {
    var url = document.getElementById("urlInput").value;
    if (!isValidURL(url)) {
        alert("please  enter a valid url");
    } else {
        toServer(url);
    }
    console.log(url);
}
function isValidURL(url) {
    try {
        new URL(url);
        return true; // If no error is thrown, the URL is valid
    } catch {
        return false; // If an error is thrown, the URL is invalid
    }
}
async function toServer(inputData) {
    try {
        const response = await fetch('http://127.0.0.1:5000/process', {  // Ensure this URL is correct
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputData }), // Sending data as JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.textContent = result.status; // Display status
        }
    } catch (error) {
        console.error('Error:', error);
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.textContent = 'Error sending data'; // Update result element
        }
    }
}