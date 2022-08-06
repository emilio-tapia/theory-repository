// GRID
function gridVisibility() {
  const gridCheckbox = document.getElementById('gridCheck');
  const gridDOM = document.getElementById('grid');
  const gridText = document.querySelector('.gridVisibility span');

  console.log(gridCheckbox.checked);
  console.log(gridText);

  gridCheckbox.addEventListener('click', () => {
    if (!gridCheckbox.checked) {
      gridDOM.style.visibility = `hidden`;
      gridText.textContent = `OFF`;
    } else {
      gridDOM.style.visibility = `visible`;
      gridText.textContent = `ON`;
    }
  });
}

gridVisibility();
