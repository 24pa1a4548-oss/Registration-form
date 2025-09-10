function registerUser() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("rePassword").value;
  let contact = document.getElementById("contact").value;
  let gender = document.getElementById("gender").value;

  // Basic password match check
  if (password !== rePassword) {
    alert("Passwords do not match!");
    return;
  }

  if (firstName && lastName && email && contact && gender) {
    document.getElementById("userTable").style.display = "table";

    let tableBody = document.getElementById("tableBody");
    let newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = firstName + " " + lastName;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = contact;
    newRow.insertCell(3).innerText = gender;

    // Reset form
    document.getElementById("regForm").reset();
  } else {
    alert("Please fill all fields!");
  }
}
