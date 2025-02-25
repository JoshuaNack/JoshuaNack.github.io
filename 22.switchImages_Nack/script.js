const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");

document.body.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
});
