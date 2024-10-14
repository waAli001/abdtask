function scrollToNextImage(imageId) {
    const nextImage = document.getElementById(imageId);
    nextImage.scrollIntoView({ behavior: 'smooth' });
}
