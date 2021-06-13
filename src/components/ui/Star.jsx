import React from 'react';

const STAR_ICON_FILLED = '&#9733;';
const STAR_ICON_OPEN = '&#9734;';
const STAR_VAR_FILLED = 'filled';

const Star = ({ variant = '', onClick }) => {
  const starIcon = variant === STAR_VAR_FILLED ? STAR_ICON_FILLED : STAR_ICON_OPEN;

  return (
    <button
      onClick={onClick}
      className="star"
      dangerouslySetInnerHTML={{ __html: starIcon }}
    />
  );
};

export default Star;
