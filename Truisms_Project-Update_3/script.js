// Array containing the video filenames
const videos = [
    'videos/video01.mp4',
    'videos/video02.mp4',
    'videos/video03.mp4'
];

let currentVideoIndex = -1; // Store the index of the current video, start with -1 to play the first video on the first click
let isSoundEnabled = false; // Flag to track if sound is enabled

// Function to switch the video when the text box is clicked
function switchVideo() {
    // Get the video element
    const videoElement = document.getElementById('video');

    // Get a random index for the next video
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videos.length);
    } while (randomIndex === currentVideoIndex); // Ensure it's not the same as the current

    // Update the current video index
    currentVideoIndex = randomIndex;

    // Set the new video source
    videoElement.src = videos[currentVideoIndex];

    // Load the new video
    videoElement.load();

    // Unmute the sound if it's not enabled
    if (!isSoundEnabled) {
        videoElement.muted = false; // Unmute the video
        isSoundEnabled = true; // Update the flag
    }

    // Play the new video
    videoElement.play();
}

// Assuming there's an HTML element to trigger the video switch
const triggerElement = document.getElementById('trigger-text-box'); // Replace with your actual element ID
triggerElement.addEventListener('click', switchVideo);
