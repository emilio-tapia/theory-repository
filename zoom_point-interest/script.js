const zoomLinks = document.querySelectorAll('#zoom_links a');
const zoomImg = document.getElementById('zoom_image');

zoomLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const position = link.getAttribute('data-position');
    zoomImg.setAttribute('data-position', position);
  });
});
