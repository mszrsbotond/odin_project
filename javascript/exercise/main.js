const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Me, Boti, I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
