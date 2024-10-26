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
function toServer(inputData) {
    const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }), // Sending data as JSON
    });

    const result = await response.json();
    document.getElementById('result').textContent = result.status;
}