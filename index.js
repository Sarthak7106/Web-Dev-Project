document.addEventListener("DOMContentLoaded", function() {
    var letters = document.querySelectorAll("#heading span");
    var delay = 0;

    letters.forEach(function(letter, index) {
        setTimeout(function() {
            letter.style.opacity = 1;
        }, delay + index * 300); // Apply individual delay to each letter
    });
});
window.addEventListener("scroll", function() {
    var heading = document.getElementById("heading");
    var scrollPosition = window.scrollY;

    // Adjust opacity based on scroll position
    var opacity = 1 - (scrollPosition / 300); // Change 300 to control fading speed
    heading.style.opacity = opacity < 0 ? 0 : opacity; // SEnsure opacity is within range
});
var body = document.querySelector('body');

        // Create a new image element for the rocket cursor
        var rocketCursor = new Image();
        rocketCursor.src = 'Images/Rocket-PNG-Free-Download.png'; // Specify the path to your rocket cursor image
        rocketCursor.style.width = '40px'; // Set the width of the rocket cursor image
        rocketCursor.style.height = 'auto'; // Automatically adjust height while maintaining aspect ratio
        rocketCursor.style.position = 'fixed'; // Set the position of the rocket cursor image to fixed


        // Add event listeners for mouseover and mousemove events to change the cursor
        body.addEventListener('mouseover', function() {
            body.style.cursor = 'none'; // Hide the default cursor
            body.appendChild(rocketCursor); // Append the rocket cursor image to the body
        });

        body.addEventListener('mousemove', function(event) {
            // Position the rocket cursor image at the mouse pointer
            rocketCursor.style.position = 'absolute';
            rocketCursor.style.left = (event.clientX - (rocketCursor.width / 2)) + 'px';
            rocketCursor.style.top = (event.clientY - (rocketCursor.height / 2)) + 'px';
        });