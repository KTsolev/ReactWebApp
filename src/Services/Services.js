const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });

  return images;
};

const inView = (el) => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  const bounds = {
    top: boundsTop,
    bottom: (boundsTop + el.clientHeight),
  };

  if ((bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
    || (bounds.top <= viewport.bottom && bounds.top >= viewport.top)) {
    return true;
  }

  return false;
};

const services = {
  importAll,
  inView
};

export default services;
