const viz = new Viz();
Reveal.addEventListener('ready', event => {
  document.querySelectorAll('.dot').forEach(dotElement => {
    viz.renderSVGElement(dotElement.innerText)
    .then(svgElement => dotElement.replaceWith(svgElement));
  });
});