const scrollBtn = () => {
  const elem = document.querySelector(`.js-scroll-btn`);

  if (elem) {

    const scrollHandler = () => {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;
      const isActive = elem.classList.contains(`active`);

      if (scrolled > coords && !isActive) {
        elem.classList.add(`active`);
      }
      if (scrolled < coords && isActive) {
        elem.classList.remove(`active`);
      }
    }

    const scroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(scroll, 0);
      }
    }

    elem.addEventListener(`click`, scroll);
    window.addEventListener(`scroll`, scrollHandler);
  }
}

export {scrollBtn}
