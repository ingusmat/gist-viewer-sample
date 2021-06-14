const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

/**
 * @param {object} params
 * @returns promise
 *
 * Fairly standard GET method
 * Calls the api endpoint and resolves a promise when that endpoint
 * returns a 200.
 *
 * If this were real, we would build it out significantly more,
 * including error handling, etc.
 */
const get = (params = {}) => {
  const urlParams = Object.keys(params).map((param) => {
    return `${param}=${params[param]}`;
  });

  const url = `${API_ENDPOINT}?${urlParams.join('&')}`;

  return fetch(url);
}

export default get;
