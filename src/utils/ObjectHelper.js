export default {
  /**
   * A simple utility to copy properties from one object to another.
   *
   * Uses object.assign if present else manually copies the properties
   *
   * Parts Taken from MDN pollyfill
   *
   * @param target
   * @param sources
   */
  assignProperties(target, ...sources) {
    if(Object.assign) {
      Object.assign(target, ...sources);
      return target;
    }

    for (var index = 0; index < sources.length; index++) {
      var source = sources[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  }
}