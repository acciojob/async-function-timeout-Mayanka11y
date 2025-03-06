//your JS code here. If required.
// Function to simulate delay using async/await
function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after delay
async function showMessage() {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");

    // Convert delay to a number
    const delay = parseInt(delayInput);

    // Validate input
    if (!textInput || isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter a valid message and delay.";
        return;
    }

    // Show waiting message
    outputDiv.innerText = "Waiting...";

    // Wait for the specified delay
    await delayFunction(delay);

    // Display the message after delay
    outputDiv.innerText = textInput;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", showMessage);
