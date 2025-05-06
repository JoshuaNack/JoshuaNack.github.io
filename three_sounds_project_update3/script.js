document.addEventListener('DOMContentLoaded', function() {
    // Get the audio and video player elements
    const audioPlayer = document.getElementById('audioPlayer');
    const videoPlayer = document.getElementById('videoPlayer');
    const audioSource = document.getElementById('audioSource');
    const changeSoundButton = document.getElementById('changeSoundButton');

    // Array of sound file paths
    const sounds = [
        "C:/Users/joshu/OneDrive/Desktop/three_sounds_project_update2/audio/sound1.mp3",
        "C:/Users/joshu/OneDrive/Desktop/three_sounds_project_update2/audio/sound2.mp3",
        "C:/Users/joshu/OneDrive/Desktop/three_sounds_project_update2/audio/sound3.mp3"
    ];

    let currentSoundIndex = 0;

    // Function to change the sound
    function changeSound() {
        // Change the audio source
        currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
        audioSource.src = sounds[currentSoundIndex];

        // Load and play the new sound
        audioPlayer.load();
        audioPlayer.play(); // Optional: Play the audio immediately after loading
    }

    // Event listener to change sound when button is clicked
    changeSoundButton.addEventListener('click', changeSound);

    // Add event listeners to the video player
    videoPlayer.addEventListener('play', function() {
        audioPlayer.play(); // Play the audio when the video starts playing
    });

    videoPlayer.addEventListener('pause', function() {
        audioPlayer.pause(); // Pause the audio when the video is paused
    });

    videoPlayer.addEventListener('ended', function() {
        audioPlayer.pause(); // Pause the audio when the video ends
        audioPlayer.currentTime = 0; // Reset the audio to the beginning
    });
});
