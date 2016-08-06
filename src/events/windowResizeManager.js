/**
 * A common class to listen to all resize events
 * and notify and objects interested in window size
 */
import {debounce} from './helper';

/**
 * Stores list of all the listeners
 * @type {Array}
 */
const listenerList = [];

/**
 * Main function which fires resize events
 * @param event
 */
const resizeFunction = function (event) {
  const {height, width} = getSize();
  listenerList.forEach(function (listener) {
    listener.call(this, width, height);
  });
};

const debouncedResizeFunction = debounce(resizeFunction, 250);
addEvent(window, 'resize', debouncedResizeFunction);

/**
 * Adds listener
 * 
 * Clients can subscribe to this method to get callback whenever window is resized.
 * @param listener
 */
export function addResizeListener(listener) {
  if (listener !== undefined && typeof listener === "function") {
    listenerList.push(listener);
  }
}
/**
 * Removes listener
 *
 * @param listener
 */
export function removeResizeListener(listener) {
  var listenerIndex = listenerList.indexOf(listener);
  if (index > -1) {
    listenerIndex.splice(index, 1);
  }
}

/**
 * function which returns the window size on demand
 * @returns {{height: Number, width: Number}}
 */
export function getSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
}
