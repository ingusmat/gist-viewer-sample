import api from '../api';
import sampleGists from '../fixtures/sampleGists';

/**
  * expose an endpoint/query that, given a username,
  * returns the public gists for that particular user
  *
  * actually resolves the sample list every time, for this demo.
  *
  * @param {string} username
  * @return promise
  */
const findAllByUser = (userName) => {
  return new Promise((resolve) => {
    api.get({userName})
      .then(() => {
        resolve(sampleGists.small);
      })
  });
};

/**
  * expose an endpoint/query that, given a gist ID,
  * returns a specific gist.
  *
  * @param {string} gistId
  * @return promise
  */
const getById = (gistId) => {
  return new Promise((resolve) => {
    api.get({id: gistId})
      .then(() => {
        const singleGist = sampleGists.large.filter((g) => (
          g.id === gistId
        ));

        if (singleGist.length) {
          resolve(singleGist[0]);
        } else {
          resolve({});
        }
      });
  });
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
  return new Promise((resolve) => {
    api.get({userName})
      .then(() => {
        resolve(sampleGists.small.filter((g) => g.isFavorite));
      })
  });
};

const sdk = {
  findAllByUser,
  findFavoritesByUser,
  favoriteById,
  getById,
  unfavoriteById,
}; 

export default sdk;
