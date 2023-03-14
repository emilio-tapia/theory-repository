var master = new TimelineLite();
setInterval(() => {
  master.add(blinkeyes());
}, 100);

function blinkeyes() {
  var tl = new TimelineLite();
  tl.to('#eyeGroup', 0.4, {
    scaleY: 0.005,
    repeat: 3,
    repeatDelay: 0.4,
    yoyo: true,
    transformOrigin: '50% 70%',
    ease: Power2.easeInOut,
  });
  return tl;
}
