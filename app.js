// Initialize EmailJS with your User ID
(function() {
  emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way

  // Get the form values
  var name = document.getElementById('fullname').value;
  var email = document.getElementById('email_id').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Use EmailJS to send the email
  emailjs.send("service_m57dmcb", "template_p0gmjsr", {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message
  }).then(function(response) {
    console.log('Success!', response.status, response.text);
    alert('Your message has been sent!');
  }, function(error) {
    console.log('Failed...', error);
    alert('Oops! Something went wrong. Please try again later.');
  });

  // Optionally reset the form after submission
  document.getElementById('contact').reset();
});
