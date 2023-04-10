function setTriggerVideo() {
  let current_time = 0;
  const video = document.getElementById('video');
  const asideElements = document.querySelectorAll('.aside div');

  video.addEventListener('timeupdate', () => {
    current_time = video.currentTime;

    if (current_time > 3 && current_time < 4) {
      removeAttribute(asideElements[0]);
      setAttribute(asideElements[1]);
    }

    if (current_time > 8 && current_time < 9) {
      removeAttribute(asideElements[1]);
      setAttribute(asideElements[2]);
    }

    // if (current_time > 10 && current_time < 11) {
    //   setAttribute(asideElements[1]);
    //   setAttribute(asideElements[2]);
    // }
  });
}

function removeAttribute(element) {
  if (element.getAttribute('aria-hidden') === 'false') {
    return element.setAttribute('aria-hidden', 'true');
  }
}

function setAttribute(element) {
  setTimeout(() => {
    if (element.getAttribute('aria-hidden') === 'true') {
      return element.setAttribute('aria-hidden', 'false');
    }
  }, 750);
}

setTriggerVideo();
