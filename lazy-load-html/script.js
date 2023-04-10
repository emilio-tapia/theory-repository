if ('loading' in HTMLImageElement.prototype) {
  document.getElementById('response').textContent =
    'This browser supports lazy loading natively';
} else {
  // fetch polyfill/third-party library
  document.getElementById('response').textContent =
    'Lazy loading is not supported in this browser';
}
