

import React from 'react';

function CoolButton(props) {
  const buttonClass = `button ${props.isSuccess ? 'is-success' : ''}`;

  return <button className={buttonClass}>{props.children}</button>;
}

export default CoolButton;
