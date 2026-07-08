let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  let password = document.getElementById("password").value;

  if (password === "admin123") {
    alert("Login Successful");
  } else {
    alert("Incorrect Password");
  }
});
