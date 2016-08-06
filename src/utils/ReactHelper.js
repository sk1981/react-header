import React from 'react';

export default {
  addPropsToChildren(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
  }
}
