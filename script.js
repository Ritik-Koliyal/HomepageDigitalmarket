$(document).ready(function () {
  $("#contactUsButton").click(function () {
    $("#contactFormModal").modal("show");
  });

  // Example: Form submission using jQuery
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "https://getform.io/f/byvpkyga",
      method: "POST",
      data: $(this).serialize(),
      success: function (data) {
        alert("Form submitted successfully!");
        $("#contactForm")[0].reset();
        $("#contactFormModal").modal("hide");
      },
      error: function (err) {
        alert("Error submitting form.");
      },
    });
  });
});

function changeImage(imageSrc) {
  document.getElementById("project-image").src = `Images/${imageSrc}`;
}
