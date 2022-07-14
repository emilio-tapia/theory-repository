const svgDOM = document.getElementById('filterSVG');
const sliderScale = document.getElementById('sliderScale');
const sliderDuration = document.getElementById('sliderDuration');

svgDOM.innerHTML = `
<filter id="noise">
<feTurbulence id="turbulence">
  <animate
    attributeName="baseFrequency"
    dur="${sliderDuration.value}"
    values="0.9 0.9;0.8 0.8;0.9 0.9"
    repeatCount="indefinite"
  ></animate>
</feTurbulence>
<feDisplacementMap in="SourceGraphic" scale="
${sliderScale.value}"></feDisplacementMap>
</filter>
`;

sliderScale.addEventListener('mousedown', (e) => {
  sliderScale.addEventListener('mousemove', (e) => {
    svgDOM.innerHTML = `
<filter id="noise">
<feTurbulence id="turbulence">
  <animate
    attributeName="baseFrequency"
    dur="${sliderDuration.value}"
    values="0.9 0.9;0.8 0.8;0.9 0.9"
    repeatCount="indefinite"
  ></animate>
</feTurbulence>
<feDisplacementMap in="SourceGraphic" scale="
${sliderScale.value}"></feDisplacementMap>
</filter>
`;
  });
});

sliderDuration.addEventListener('mousedown', (e) => {
  sliderDuration.addEventListener('mousemove', (e) => {
    svgDOM.innerHTML = `
<filter id="noise">
<feTurbulence id="turbulence">
  <animate
    attributeName="baseFrequency"
    dur="${sliderDuration.value}"
    values="0.9 0.9;0.8 0.8;0.9 0.9"
    repeatCount="indefinite"
  ></animate>
</feTurbulence>
<feDisplacementMap in="SourceGraphic" scale="
${sliderScale.value}"></feDisplacementMap>
</filter>
`;
  });
});
