document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form fields (you can add more validation as needed)
    var name = document.getElementById("name").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !subject || !message) {
      var formMessageWarning = document.getElementById("form-message-warning");
      if (formMessageWarning) {
        formMessageWarning.innerHTML = "Please fill out all fields.";
        formMessageWarning.style.display = "block";
        setTimeout(function () {
          formMessageWarning.style.display = "none";
        }, 2000);
      }
      return;
    }

    // Reset any previous warning messages
    var formMessageWarning = document.getElementById("form-message-warning");
    if (formMessageWarning) {
      formMessageWarning.innerHTML = "";
      formMessageWarning.style.display = "none";
    }

    var formMessageSuccess = document.getElementById("form-message-success");
    if (formMessageSuccess) {
      formMessageSuccess.innerHTML = "Your message was sent, Thank You!";
      formMessageSuccess.style.display = "block";
      setTimeout(function () {
        formMessageSuccess.style.display = "none";
      }, 2000);
    }
    contactForm.reset();
  });
});
