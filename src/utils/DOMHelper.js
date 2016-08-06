export default {
  /**
   * Used in calculating if the size is running in desktop mode
   * (large screen) or mobile mode (small screen).
   *
   * For this , it looks ta the values attached to the header element via css properties.
   *
   * This way it is in sync with any css media queries.
   * @returns {string}
   */
  getMode() {
    let value = 'mobile';
    const headerElement = document.querySelector('.site-header');
    if (headerElement !== null) {
      value = window.getComputedStyle(headerElement, ':before').getPropertyValue('content').replace(/\"/g, '');
    }
    return value;
  },

  /**
   * Get visible height of the element
   *
   * @param elementClass
   * @returns {{height: number, width: number}}
   */
  getElementVisibleHeight(elementClass) {
    const element = document.getElementsByClassName(elementClass);
    if(element.length === 0) {
      throw new Error(`No Element found with class : ${elementClass}`);
    }
    const boundingBox = element[0].getBoundingClientRect();
    // As header is on the top, to find visible height just add any negative "top" value to get header height
    const visibleHeight = Math.max(boundingBox.height + boundingBox.top, 0);
    console.log(visibleHeight);
    // AS react is > IE8, these properties will always be present
    return visibleHeight;
  }
}