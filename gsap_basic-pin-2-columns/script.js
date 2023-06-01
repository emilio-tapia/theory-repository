gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.gallery',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.right',
  markers: true,
});
