import React, { useState } from 'react';
import Star from '../ui/Star';

const STAR_VAR_FILLED = 'filled';
const STAR_VAR_OPEN = 'open';

/**
 * @decorator
 * @param {Event} e
 * @param {function} func
 *
 * (P)revents (D)efault click behavior, (A)nd returns the provided function
 */
const pdAnd = (e, func) => {
  e.preventDefault();

  return func
}

const GistList = ({ gists, updateSelectedGist, toggleFavorite }) => {
  return (
    <ul className="gist-list">
      {gists.map((gist) => {
        const { description, id, url, createDate, isFavorite } = gist;

        return (
          <li key={id}>
            <Star onClick={(e) => pdAnd(e, toggleFavorite)(id)} variant={isFavorite ? STAR_VAR_FILLED : STAR_VAR_OPEN} />
            <a href={url} onClick={(e) => pdAnd(e, updateSelectedGist)(id)}>{description}</a>
            <small>{createDate.toDateString()}</small>
          </li>
        )
      })}
    </ul>
  );
}

export default GistList;
