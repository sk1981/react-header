import React from 'react';
import MobileHeader from '../header/MobileHeader';
import DesktopHeader from '../header/DesktopHeader';


function getHeaderChild(props) {
  const {mode} = props;
  let headerChild;
  if(mode === undefined) {
    headerChild = <div></div>;
  } else if(mode === 'desktop') {
    headerChild = <DesktopHeader {...props}/>
  } else {
    headerChild = <MobileHeader {...props}/>
  }
  return headerChild;
}

/**
 * Top level header element which styles a basic header
 */
const ResizableHeader = (props) => {

  return (
    <header className={`site-header`}>
      {getHeaderChild(props)}
    </header>
  );
};

export default ResizableHeader;