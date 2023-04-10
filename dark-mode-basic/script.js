let checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    setTransition();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    setTransition();
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

let setTransition = () => {
  document.documentElement.classList.add('transition');

  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 500);
};
