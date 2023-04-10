const matchResult = window.matchMedia('(max-width: 700px)');

function isSmallScreen() {
  const text = document.querySelector('.changeText');
  if (matchResult.matches) {
    text.textContent = 'This text is below 700px';
    if (text.classList.contains('above')) text.classList.remove('above');
  } else {
    text.textContent = 'This text is above 700px';
    text.classList.add('above');
  }
}

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

function setDarkMode() {
  const text = document.querySelector('.darkModeDetector');
  if (isDarkMode.matches) {
    text.textContent = 'OS Dark Mode On';
  } else {
    text.textContent = 'OS Dark Mode Off';
  }
}

isSmallScreen();
// window.addEventListener('resize', isSmallScreen);
matchResult.addEventListener('change', isSmallScreen);

setDarkMode();
isDarkMode.addEventListener('change', setDarkMode);
