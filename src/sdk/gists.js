import api from '../api/index';

const VAR_FAV_ONLY = 'favoritesOnly';

/**
  * expose an endpoint/query that, given a username,
  * returns the public gists for that particular user
  *
  * @param {string} username
  * @return promise
  */
const findAllByUser = (userName) => {
  return api.get([{userName}]);
};

/**
  * expose an endpoint/query that, given a gist ID,
  * returns a specific gist.
  *
  * @param {string} gistId
  * @return promise
  */
const getById = (gistId) => {
  return api.get([{id: gistId}]);
};

/**
  * expose an endpoint/mutation that,
  * given a gist ID, marks the gist as favorited.
  *
  * @param {string} gistId
  * @return promise
  */
const favoriteById = (gistId) => {
  return api.patch(gistId, {isFavorite: true});
};

/**
  * expose an endpoint/mutation that,
  * given a gist ID, marks the gist as not-favorited
  *
  * @param {string} gistId
  * @return promise
  */
const unfavoriteById = (gistId) => {
  return api.patch(gistId, {isFavorite: false});
};

/** expose an endpoint/query that returns all gists marked as favorites.
  *
  * @param {string} username
  * @return promise
  */
const findFavoritesByUser = (userName) => {
  return api.get([{userName}, {variant: VAR_FAV_ONLY}]);
};

const sdk = {
  findAllByUser,
  findFavoritesByUser,
  favoriteById,
  getById,
  unfavoriteById,
}; 

export default sdk;
