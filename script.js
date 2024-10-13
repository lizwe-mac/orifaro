const alphabet = "abcdefghijklmnopqrstuvwxyz";
const script = "abcdef97:6)1m.08-'5+4%3xy2";
const scriptArray = script.split("");

const alphabetArray = alphabet.split("");

function encriptText() {
  let newArr = [];
  const input = document.getElementById("input");

  const array = input.value.split("");

  array.forEach((char) => {
    const index = alphabetArray.indexOf(char);
    newArr.push(index !== -1 ? scriptArray[index] : char);
  });

  document.getElementById("paragraph").innerText = newArr.join("");
  document.getElementById("actionBtns").style.display = "flex";
}

function decriptText() {
  let newArr = [];
  const input = document.getElementById("input");

  const array = input.value.split("");

  array.forEach((char) => {
    const index = scriptArray.indexOf(char);
    newArr.push(index !== -1 ? alphabetArray[index] : char);
  });

  document.getElementById("paragraph").innerText = newArr.join("");
  document.getElementById("actionBtns").style.display = "flex";
}

function copyToClipboard() {
  // Get the text content from the div
  var text = document.getElementById("paragraph").innerText;

  // Create a temporary input element to copy the text
  var tempInput = document.createElement("input");
  tempInput.value = text;

  // Add the temporary input to the body
  document.body.appendChild(tempInput);

  // Select the text in the temporary input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  document.execCommand("copy");

  // Remove the temporary input from the body
  document.body.removeChild(tempInput);

  // Optionally, alert the user
  alert("Text copied to clipboard: " + text);
}

function clearText() {
  document.getElementById("paragraph").innerText = "";
}

function shareText() {
  // Check if the Web Share API is supported by the browser
  if (navigator.share) {
    // Get the text from the div
    var textToShare = document.getElementById("paragraph").innerText;

    // Use the Web Share API to share the text
    navigator
      .share({
        title: "Shared Content",
        text: textToShare,
        url: window.location.href, // Optional, shares the current URL
      })
      .then(() => {
        console.log("Text shared successfully!");
      })
      .catch((error) => {
        console.error("Error sharing text:", error);
      });
  } else {
    alert("Web Share API is not supported in this browser.");
  }
}
