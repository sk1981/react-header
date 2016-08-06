import React from 'react';
import ResizableHeader from './header/ResizableHeader';
import ApplicationSizeCalculator from './events/ApplicationSizeCalculator';


/**
 * Top level header element which styles a basic header
 */
const Header = (props) => {
  return (
    <ApplicationSizeCalculator>
      <ResizableHeader  {...props}>{props.children}</ResizableHeader>
    </ApplicationSizeCalculator>
  );
};

export default Header;