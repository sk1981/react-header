import React from 'react';
/**
 * Used for displaying a simple logo
 *
 * Can either be a text, image or component
 * By default logo will be on the top left and will always be displayed as the top header
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Logo = (props) => {
  return (
    <div className="site-logo">
      {props.link ? <a className="site-logo__link" href={props.link}>{props.title}</a> : props.title}
    </div>
  );
};

Logo.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Logo;
