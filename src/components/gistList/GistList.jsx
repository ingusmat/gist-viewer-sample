import React from 'react';
import PropTypes from 'prop-types';

import Star from '../ui/Star';
import pdAnd from '../../utilities/utilityFunctions'; 

const STAR_VAR_FILLED = 'filled';
const STAR_VAR_OPEN = 'open';

const GistList = ({ gists, updateSelectedGist, favoritify, deFavoritify }) => {
  return (
    <ul className="gist-list">
      {gists.map((gist) => {
        const { description, id, url, createDate, isFavorite } = gist;

        const toggleFavorite = () => {
          if (isFavorite) {
            deFavoritify(id);
          } else {
            favoritify(id);
          }
        }

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

GistList.propTypes = {
  gists: PropTypes.array,
  updateSelectedGist: PropTypes.func,
  favoritify: PropTypes.func,
  deFavoritify: PropTypes.func, 
}

GistList.defaultProps = {
  gists: [],
  updateSelectedGist: null,
  favoritify: null,
  deFavoritify: null, 
}

export default GistList;
