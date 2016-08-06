import React from 'react';
import MobileHeader from '../header/MobileHeader';
import DesktopHeader from '../header/DesktopHeader';


/**
 * Top level header element which styles a basic header
 */
const ResizableHeader = (props) => {
    const isDesktop = props.mode === 'desktop';
    return isDesktop ? <DesktopHeader {...props}/> : <MobileHeader {...props} />
};

export default ResizableHeader;