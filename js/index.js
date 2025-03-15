const box = document.querySelector('.imgfst');

// Add the "animate" class on first hover
box.addEventListener('mouseenter', function handleHover() {
  box.classList.add('animate');
  
  // Remove the event listener after the first hover
  box.removeEventListener('mouseenter', handleHover);
});
