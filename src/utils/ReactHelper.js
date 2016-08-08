import React from 'react';
import ObjectHelper from './ObjectHelper'

export default {
  addPropsToChildren(children, props, addIndex = false) {
    return React.Children.map(children, (child, index) => {
      const finalProps = addIndex ? ObjectHelper.assignProperties({}, props, {index: index}): props;
      return React.cloneElement(child, finalProps)
    });
  }
}
