<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Click Text Change</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            position: relative;
        }
        #image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }
        #text-box {
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
            font-size: 24px;
            text-align: center;
        }
    </style>
</head>
<body>

<img id="image" src="images/tombrady.jpg" alt="Tom Brady" onclick="changeText()">

<div id="text-box">Click the image!</div>

<script>
    const sentences = [
        "Winning is not a sometime thing; it's an all-the-time thing.",
        "I’ve never lost a game. I just ran out of time.",
        "The future is not a gift; it’s an achievement.",
        "It’s not whether you get knocked down; it’s whether you get up.",
        "Champions keep playing until they get it right."
    ];

    let currentIndex = 0;

    function changeText() {
        const textBox = document.getElementById("text-box");
        textBox.innerText = sentences[currentIndex];
        currentIndex = (currentIndex + 1) % sentences.length; // Loop through sentences
    }
</script>

</body>
</html>
