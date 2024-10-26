function submit() {
    var url = document.getElementById("urlInput").value;
    if (!isValidURL(url)) {
        alert("please  enter a valid url");
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