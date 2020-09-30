const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });

  return images;
};

const inView = (el) => {
  if(!el) return;
  let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
};

const isMSIE = () => {

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      return true;
  }

  return false;
}

const services = {
  importAll,
  inView,
  isMSIE
};

export default services;
