const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");
const button = document.getElementById("btn");

button.addEventListener("click", async()=>{
	const text = textInput.value;
	const delay = parseInt(delayInput.value);
	outputDiv.innerHTML = "";
	await new Promise(resolve => setTimeout(resolve,delay));
	outputDiv.innerText = text;
});