//contact page

function confimationMessage(event) {
  let confirmation = document.querySelector("#contact-heading");
  confirmation.innerHTML = "Thank you. Your message has been sent 🍃";
  let submitButton = document.querySelector("#submit");
  submitButton.innerHTML = "Submitted";
}
let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", confimationMessage);
