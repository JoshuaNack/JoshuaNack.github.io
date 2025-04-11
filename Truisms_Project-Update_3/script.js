// Array containing the video filenames
const videos = [
    'videos/video01.mp4',
    'videos/video02.mp4',
    'videos/video03.mp4'
];

let currentVideoIndex = 0; // Store the index of the current video
let isSoundEnabled = false; // Flag to track if sound is enabled

// Function to switch the video when the text box is clicked
function switchVideo() {
    // Get the video element
    const videoElement = document.getElementById('video');

    // Get a random index for the next video, ensuring it's not the same as the current
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videos.length);
    } while (randomIndex === currentVideoIndex);

    // Update the current video index
    currentVideoIndex = randomIndex;

    // Set the new video source
    videoElement.src = videos[currentVideoIndex]; 

    // Load the new video
    videoElement.load(); 

    // Unmute the sound only on the first click, otherwise keep it muted
    if (!isSoundEnabled) if {
        videoElement.muted = false; // Unmute the video
        isSoundEnabled = true; // Update the flag
    } else {
        videoElement.muted = true; // Ensure sound is still enabled on subsequent plays (if needed)
    }

    videoElement.play(); // Auto-play the new video
}

// Assuming there's an HTML element to trigger the video switch
const triggerElement = document.getElementById('trigger-text-box'); // Replace with your actual element ID
triggerElement.addEventListener('click', switchVideo);
