(() => {
  const throttle = (func, limit) => {
    let inThrottle
    return function () {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  const elements = Array.from(document.querySelectorAll('[data-js-animate-in-view=""]'));

  const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (bounding.top <= windowHeight)
      && ((bounding.top + bounding.height) >= 0);
    const horInView = (bounding.left <= windowWidth)
      && ((bounding.left + bounding.width) >= 0);

    return (vertInView && horInView);
  };

  const checkIfElementsShouldAnimate = () =>
    elements
      .filter(isInViewport)
      .forEach(el => el.classList.add('js-animate-in-view'));

  window.addEventListener(
    'scroll',
    throttle(checkIfElementsShouldAnimate, 100)
  );
  checkIfElementsShouldAnimate();
})();
