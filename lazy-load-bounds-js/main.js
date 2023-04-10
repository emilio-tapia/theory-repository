import './style.scss';
import Bound from 'bounds.js';

const boundary = Bound({
  margins: { bottom: 0 },
});

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((p) => {
  boundary.watch(
    p,
    () => {
      // when element enters
      p.classList.add('reveal');
      // boundary.unWatch(p);
    },
    () => {
      // when element leaves
      p.classList.remove('reveal');
    }
  );
});

const images = document.querySelectorAll('img');

images.forEach((img) => {
  boundary.watch(img, () => {
    // when element enters
    img.src = img.dataset.src;
    img.classList.add('reveal');
    boundary.unWatch(img);
  });
});

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector('#counter'));
