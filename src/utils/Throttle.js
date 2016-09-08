
const throttle = (func, throttleTime) => {
  const thisArg = this;
  let wait = false;
  return function(...argsArr) {
    if (!wait) {
      func.apply(thisArg, argsArr);
      wait = true;
      setTimeout(function() {
        wait = false;
      }, throttleTime);
    }
  };
};

export {throttle};