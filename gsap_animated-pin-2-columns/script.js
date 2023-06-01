gsap.registerPlugin(ScrollTrigger);

gsap.set('.photo:not(:first-child)', { opacity: 0, y: '100%' });

const animation = gsap.to('.photo:not(:first-child)', {
  opacity: 1,
  y: '0%',
  duration: 1,
  stagger: 1,
});

ScrollTrigger.create({
  trigger: '.gallery',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.right',
  animation: animation,
  scrub: true,
  markers: true,
});
