<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation Example</title>
</head>
<body>
  <form id="contactForm">
    <label>
      Name:
      <input type="text" id="name" />
    </label>
    <br><br>
    <label>
      Email:
      <input type="email" id="email" />
    </label>
    <br><br>
    <button type="submit">Submit</button>
  </form>

  <p id="message" style="color: red;"></p>

  <script>
    const form = document.getElementById('contactForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop form from submitting

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name === '') {
        message.textContent = 'Name is required.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        return;
      }

      message.style.color = 'green';
      message.textContent = 'Form submitted successfully!';
    });
  </script>
</body>
</html>
