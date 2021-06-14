import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SingleGist = ({ gist, returnToList, favoritify, deFavoritify }) => {
  const  { id, description, files = [], createDate, isFavorite } = gist;
  const [tempIsFavorite, setTempIsFavorite] = useState(isFavorite);

  /**
   * Update the ui before calling the method that invokes the patch api call
   * This keeps the user from spamming the toggle waiting for a slow api.
   *
   * if this were real, we would introduce error handling and reset the value,
   * and throw up a toast/snackbar alert saying there was an api error.
   *
   * As it is, there's no persistance, so it doesn't matter.
   */
  const toggleFavorite = () => {
    const newIsFav = !tempIsFavorite;
    setTempIsFavorite(newIsFav);
    if (newIsFav) {
      favoritify(id);
    } else {
      deFavoritify(id);
    }
  }

  return (
    <div className="single-gist">
      <label>id</label>
      <p>{id}</p>
      <label>created at</label>
      <p>{createDate.toDateString()}</p>
      <label>description</label>
      <p>{description}</p>
      <label>files</label>
      <ul>
        {files.map((file, ind) => (
          <li key={`file_${ind}`}>{file}</li>
        ))}
      </ul>
      <label>favorite</label>
      <p>
        <button disabled={tempIsFavorite} onClick={toggleFavorite}>yes</button>
        <button disabled={!tempIsFavorite} onClick={toggleFavorite}>no</button>
      </p>
    </div>
  );
}

SingleGist.propTypes = {
  gist: PropTypes.object.isRequired,
  favoritify: PropTypes.func,
  deFavoritify: PropTypes.func, 
}

SingleGist.defaultProps = {
  favoritify: null,
  deFavoritify: null, 
}
export default SingleGist;

