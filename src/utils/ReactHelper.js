import React from 'react';
import ObjectHelper from './ObjectHelper'

export default {

  /**
   * Gets a lit of react children and appends the given properties
   * to each of them one by one
   *
   * Additionally takes addIndex attribute to add an index field
   * which denotes the index of the given child in the children array
   *
   * @param children
   * @param props
   * @param addIndex
   * @returns {*}
   */
  addPropsToChildren(children, props, addIndex = false) {
    return React.Children.map(children, (child, index) => {
      const finalProps = addIndex ? ObjectHelper.assignProperties({}, props, {index: index}) : props;
      return React.cloneElement(child, finalProps)
    });
  },

  /**
   * Gets the main navigation object by appending isMainMenu Property
   *
   * @param navigationChild
   * @param originalProps
   * @returns {XML}
   */
  getMainNav(navigationChild, originalProps) {
    const navListProps = ObjectHelper.assignProperties({}, originalProps, {isMainMenu: true});
    return (
      <nav role="navigation" key="nav" className="site-navigation">
        {React.cloneElement(navigationChild, navListProps)}
      </nav>
    );
  }
}
