let mm = gsap.matchMedia();

// ! animation trigger with a max width of 500px
// mm.add('(max-width: 500px)', () => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.square',
//       start: 'top 80%',
//       end: 'bottom 20%',
//       scrub: true,
//     },
//   });

//   tl.to('.square1', {
//     rotation: 360,
//     duration: 2,
//   }).to('.square1', {
//     scale: 2,
//     duration: 2,
//   });
// });

// ! matchMedia Conditions

mm.add(
  {
    isMobile: '(max-width: 500px)',
    isDesktop: '(min-width: 501px)',
  },
  (context) => {
    let { isMobile, isDesktop } = context.conditions;

    // condition for not playing the animation over again when pass the media query
    let duration = context.isReverted ? 0 : 2;

    gsap.to('.square1', {
      rotation: isMobile ? 360 : 20,
      scale: isDesktop ? 2 : -1,
      backgroundColor: isMobile ? 'red' : 'purple',
      duration: duration,
    });
  }
);
