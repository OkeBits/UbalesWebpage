const nextBtn = document.getElementById('nextImageBtn');
const featuredImage = document.getElementById('featured-image');
const portfolioImages = [
  'https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/3:2/w_7950,h_5300,c_limit/GettyImages-955441104.jpg',
  'https://static.dw.com/image/15861462_604.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg'
];
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % portfolioImages.length;
  featuredImage.src = portfolioImages[currentIndex];
});

// Contact form submission handler
const contactButton = document.querySelector('.form-btn-wrapper button');
if (contactButton) {
  contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from actually submitting
    const form = document.querySelector('.contact-form');
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const messageText = form.querySelector('textarea').value;

    // Validate if fields are not empty
    if (name && email && messageText) {
      const message = document.createElement('p');
      message.textContent = 'Message Sent!';
      message.style.color = 'green';
      form.appendChild(message);

      // Clear the form fields after submission
      form.querySelector('input[type="text"]').value = '';
      form.querySelector('input[type="email"]').value = '';
      form.querySelector('textarea').value = '';
      
      // Optional: Remove the "Message Sent!" message after a few seconds
      setTimeout(() => {
        message.remove();
      }, 3000);
    } else {
      // If any field is empty, show a validation message
      const validationMessage = document.createElement('p');
      validationMessage.textContent = 'Please fill out all fields.';
      validationMessage.style.color = 'red';
      form.appendChild(validationMessage);

      setTimeout(() => {
        validationMessage.remove();
      }, 3000);
    }
  });
}
