const form = document.querySelector("form");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const postal = document.getElementById("postal");
const postalError = document.querySelector("#postal + span.error");

const passwd = document.getElementById("passwd");
const passwdError = document.querySelector("#passwd + span.error");

const passwdConf = document.getElementById("passwdConf");
const passwdConfError = document.querySelector("#passwdConf + span.error");

function emailShowError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    emailShowError();
  }
});

function postalShowError() {
  if (postal.validity.badInput) {
    postalError.textContent = "It must be a number";
  }
  postalError.className = "error active";
}

postal.addEventListener("input", () => {
  if (postal.validity.valid) {
    postalError.textContent = "";
    postalError.className = "error";
  } else {
    postalShowError();
  }
});

function passwdShowError() {
  if (passwd.validity.tooShort) {
    passwdError.textContent = "Password should be at least 5 letters";
  } else {
    passwdError.textContent = "Please Enter a valid Password";
  }
  passwdError.className = "error active";
}

passwd.addEventListener("input", () => {
  if (passwd.validity.valid) {
    passwdError.textContent = "";
    passwdError.className = "error";
  } else {
    passwdShowError();
  }
});

function passwdConfShowError() {
  if (passwd.value != passwdConf.value) {
    passwdConfError.textContent = "Passwords Should Match";
    passwdConfError.className = "error active";
    passwdConf.style["background-color"] = "#900"
  } else {
    passwdConfError.textContent = "";
    passwdConfError.className = "error";
    passwdConf.style["background-color"] = "rgba(4, 126, 38, 0.513)"
  }
}
passwdConf.addEventListener("input", () => {
  passwdConfShowError();
});
