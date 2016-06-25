import React from 'react';
import Header from './Header.js';

const StickyHeader = (props) => {
  return (
    <div className="sticky-header">
      <Header {...props}>{props.children}</Header>
    </div>
  );
};

export default StickyHeader;
