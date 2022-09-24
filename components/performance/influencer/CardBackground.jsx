import React from 'react';

function CardBackground({ children, divStyle }) {
  return <div className={divStyle}>{children}</div>;
}

export default CardBackground;
