import React from 'react';
const Logo = (props) => {
  return (
    <div className="site-logo">
      {props.link ? <a className="site-logo__link" href={props.link}>{props.title}</a> : props.title}
    </div>
  );
};

export default Logo;
