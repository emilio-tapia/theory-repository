const closeButton = document.querySelector('.popup button');
const setButton = document.querySelector('.button-wrapper button');

closeButton.addEventListener('click', setPopup);
setButton.addEventListener('click', setPopup);

function setPopup() {
  console.log('llega');
  const background = document.querySelector('.background-popup');
  const popup = document.querySelector('.popup');

  popup.classList.toggle('active');
  background.classList.toggle('active');
}
