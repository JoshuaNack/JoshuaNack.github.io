// Array of images corresponding to the text boxes
const images = [
    'images/image_1.jpg', // Image for text box 1
    'images/image_2.jpg', // Image for text box 2
    'images/image_3.jpg', // Image for text box 3
    'images/image_4.jpg', // Image for text box 4
    'images/image_5.jpg',  // Image for text box 5
	'images/image_6.jpg', // Image for text box 1
    'images/image_7.jpg', // Image for text box 2
    'images/image_8.jpg', // Image for text box 3
    'images/image_9.jpg', // Image for text box 4
    'images/image_10.jpg',  // Image for text box
    'images/image_11.jpg', // Image for text box 2
    'images/image_12.jpg', // Image for text box 3
  
];

// Get all text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Function to change background image based on index
function changeBackground(index) {
    document.body.style.backgroundImage = `url('${images[index]}')`;
}

// Create IntersectionObserver to monitor text boxes
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the text box is intersecting the viewport
        if (entry.isIntersecting) {
            const index = Array.from(textBoxes).indexOf(entry.target);
            changeBackground(index); // Change background
        }
    });
});

// Observe each text box
textBoxes.forEach(textBox => {
    observer.observe(textBox);
});

// Initialize the background with the first image
changeBackground(0);
