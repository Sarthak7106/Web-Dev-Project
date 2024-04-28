var likeBtns = document.querySelectorAll('.like-btn');
var shareBtns = document.querySelectorAll('.share-btn');
var commentBtns = document.querySelectorAll('.comment-btn');
var likeCounts = document.querySelectorAll('.like-count');
var shareCounts = document.querySelectorAll('.share-count');
var commentCounts = document.querySelectorAll('.comment-count');

function handleLike(index) {
    var count = parseInt(likeCounts[index].textContent);
    likeCounts[index].textContent = count + 1;
}

function handleShare(index) {
    var count = parseInt(shareCounts[index].textContent);
    shareCounts[index].textContent = count + 1;
}

function handleComment(index) {
    var count = parseInt(commentCounts[index].textContent);
    commentCounts[index].textContent = count + 1;
}

likeBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        handleLike(index);
    });
});

shareBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        handleShare(index);
    });
});

commentBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        handleComment(index);
    });
});

// Function to handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Display uploaded image
            const uploadedImg = document.createElement('img');
            uploadedImg.src = e.target.result;
            uploadedImg.alt = "Uploaded Image";
            uploadedImg.classList.add('uploaded-image');
            document.getElementById('upload-section').appendChild(uploadedImg);
        };
        reader.readAsDataURL(file);
    }
}

// Event listener for file input change
document.getElementById('uploadInput').addEventListener('change', handleFileUpload);

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal
    var images = document.querySelectorAll('.gallery-image img');
    var modalImg = document.getElementById("modalImg");

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Toggle comment box visibility
    var commentButtons = document.querySelectorAll('.comment-btn');
    var commentBoxes = document.querySelectorAll('.comment-box');

    commentButtons.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            commentBoxes[index].style.display = commentBoxes[index].style.display === 'block' ? 'none' : 'block';
        });
    });

    // Add comment
    var addCommentButtons = document.querySelectorAll('.add-comment-btn');
    var commentLists = document.querySelectorAll('.comment-list');

    addCommentButtons.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            var textarea = commentBoxes[index].querySelector('textarea');
            var commentText = textarea.value.trim();
            if (commentText !== '') {
                var newComment = document.createElement('p');
                newComment.textContent = commentText;
                commentLists[index].appendChild(newComment);
                textarea.value = '';
            }
        });
    });
});
document.getElementById('uploadButton').addEventListener('click', function() {
    var uploadInput = document.getElementById('uploadInput');
    var file = uploadInput.files[0];

    if (file) {
        // Perform upload operation here, e.g., upload to server or display preview
        var reader = new FileReader();
        reader.onload = function(event) {
            var imgSrc = event.target.result;
            // Display the uploaded image preview
            displayImagePreview(imgSrc);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
});

function displayImagePreview(imgSrc) {
    var modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    // Show modal with uploaded image
    document.getElementById('myModal').style.display = 'block';
}

// Close modal when the user clicks on the close button (X)
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Close modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


