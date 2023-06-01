let containerSize = 300;
let squareSize = 100;
let path = containerSize - squareSize;

// WITHOUT KEYFRAMES

// let tl_noKeyframes = gsap.timeline({
//     repeat: -1,
//   });
// tl_noKeyframes
//   .to('.square', {
//     x: path,
//   })
//   .to('.square', {
//     y: path,
//   })
//   .to('.square', {
//     x: 0,
//   })
//   .to('.square', {
//     y: 0,
//   });

// WITH OBJECT KEYFRAMES

gsap.to('.square1', {
  repeat: -1,
  transformOrigin: 'center',
  keyframes: [
    { x: path, ease: 'power2.out' },
    { y: path, rotate: 180 },
    { x: 0, delay: 0.5 },
    { y: 0, ease: 'power2.in' },
  ],
});

// WITH PERCENTAGE KEYFRAMES

gsap.to('.square2', {
  repeat: -1,
  transformOrigin: 'center',
  duration: 6,

  keyframes: {
    '25%': { x: path, ease: 'power2.out' },
    '50%': { y: path, rotate: 180 },
    '75%': { x: 0, delay: 0.5 },
    '100%': { y: 0, ease: 'power2.in' },
    easeEach: 'sine.inOut', // ease between keyframes
    ease: 'expo.out', // ease the entire keyframe block
  },
  ease: 'elastic.in',
  rotate: 360,
});

// WITH ARRAY KEYFRAMES

gsap.to('.square3', {
  repeat: -1,
  transformOrigin: 'center',
  duration: 6,

  keyframes: {
    x: [0, path, path, 0, 0],
    y: [0, 0, path, path, 0],
    backgroundColor: ['#222', '#888', '#554343'],
  },
  //   ease: 'elastic.in',
  rotate: 360,
});
