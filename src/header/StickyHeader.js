import React from 'react';
import Header from './Header.js';

/**
 * A sticky header HoC which makes the header stick to the top of the screen
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const StickyHeader = (props) => {
  return (
    <div className="sticky-header">
      <Header {...props}>{props.children}</Header>
    </div>
  );
};

StickyHeader.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default StickyHeader;
