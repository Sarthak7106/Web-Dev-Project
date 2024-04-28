document.getElementById("showMapBtn").addEventListener("click", function() {
    var starMapDiv = document.getElementById("starMap");
    if (starMapDiv.style.display === "none") {
        starMapDiv.style.display = "block";
        this.textContent = "Hide Star Map";
    } else {
        starMapDiv.style.display = "none";
        this.textContent = "Show Star Map";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var letters = document.querySelectorAll("#heading span");
    var delay = 0;

    letters.forEach(function(letter, index) {
        setTimeout(function() {
            letter.style.opacity = 1;
        }, delay + index * 300); // Apply individual delay to each letter
    });



