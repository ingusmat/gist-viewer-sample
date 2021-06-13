const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const HEADERS = { 'Content-type': 'application/json' };
const METHOD = 'PATCH';

/**
 * @param {string} gistId
 * @param {Object} params
 * @returns promise
 */
const patch = (gistId, params = {}) => {
  const url = `${API_ENDPOINT}/gists/${gistId}`;

  const patchParams = {
    headers: HEADERS,
    method: METHOD,
    body: JSON.stringify(params)
  }

  return fetch(url, patchParams);
}

export default patch;

