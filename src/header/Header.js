import React from 'react';
import ResizableHeader from './ResizableHeader';
import ApplicationSizeCalculator from '../events/ApplicationSizeCalculator';


/**
 * Top level header element which styles a basic header
 *
 * Consists of Logo, Navigation Bar and any other item
 */
const Header = (props) => {
  return (
    <ApplicationSizeCalculator>
      <ResizableHeader  {...props}>{props.children}</ResizableHeader>
    </ApplicationSizeCalculator>
  );
};

Header.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default Header;