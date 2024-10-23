let currentImageIndex = 0; // Track the current image index

function scrollToNextImage(nextImgId) {
    const images = document.querySelectorAll('.image');
    const nextImg = document.getElementById(nextImgId);

    // Find the index of the next image
    for (let i = 0; i < images.length; i++) {
        if (images[i].id === nextImgId) {
            currentImageIndex = i;
            break;
        }
    }

    // Determine scroll direction
    const container = document.querySelector('.image-container');
    const scrollToPosition = nextImg.offsetTop; // Get the position of the next image

    // Adjust the transform property to scroll
    container.style.transform = `translateY(-${scrollToPosition}px)`;
}

// Optional: Add keyboard navigation
document.addEventListener('keydown', (event) => {
    const images = document.querySelectorAll('.image');
    if (event.key === 'ArrowDown') {
        // Scroll down to the next image
        const nextIndex = (currentImageIndex + 1) % images.length;
        scrollToNextImage(images[nextIndex].id);
    } else if (event.key === 'ArrowUp') {
        // Scroll up to the previous image
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        scrollToNextImage(images[prevIndex].id);
    }
});
