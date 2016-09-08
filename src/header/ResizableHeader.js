import React from 'react';
import MobileHeader from '../header/MobileHeader';
import DesktopHeader from '../header/DesktopHeader';

/**
 * Gets the type of the header, based on the mode
 *
 * @param props
 * @returns {*}
 */
function getHeaderChild(props) {
  const {mode} = props;
  let headerChild;
  // We cannot have a default mode otherwise the app may switch
  // from the default mode to current mode.
  // Hence, just show empty data till the app is initialized
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
 * Header element which changes it's type according to
 * window size/current mode
 */
const ResizableHeader = (props) => {

  return (
    <header className={`site-header`}>
      {getHeaderChild(props)}
    </header>
  );
};

export default ResizableHeader;