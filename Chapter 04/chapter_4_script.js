
// Example JavaScript related to performance optimizations for mobile

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    // Example of lazy loading images
    const lazyLoadImages = document.querySelectorAll('img[data-src]');
    lazyLoadImages.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => {
            img.removeAttribute('data-src');
        };
    });
    
    // Additional scripts related to optimization techniques discussed in Chapter 4
    // can be added here
});
