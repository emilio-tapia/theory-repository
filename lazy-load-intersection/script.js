const images = document.querySelectorAll('.lazy-img');

const setLazyLoadingObserver = () => {
  const options = {
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  images.forEach((im) => {
    observer.observe(im);
  });
};

setLazyLoadingObserver();

// -------------------------------------

const section = document.getElementById('foot');

const getImage = () => {
  fetch('https://source.unsplash.com/random/300×300').then((res) => {
    const fragment = document.createDocumentFragment();
    const newImg = document.createElement('img');
    newImg.src = res.url;
    fragment.appendChild(newImg);
    section.appendChild(fragment);
    setObserver();
  });
};

getImage();

const setObserver = () => {
  const options = {
    threshold: 0.5,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        getImage();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(section.lastElementChild);
};
