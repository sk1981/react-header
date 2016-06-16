import React from 'react';
export default (props) => {
  return (
    <div className="site-logo">
      {props.link ? <a className="site-logo__link" href={props.link}>{props.title}</a> : props.title}
    </div>
  );
}
