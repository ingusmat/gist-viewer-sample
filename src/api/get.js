const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

/**
 * @param {object[]} params
 * @returns promise
 */
const get = (params = []) => {
  const urlParams = params.map((param) => {
    const [ k,v ] = param;
    return `${k}=${v}`;
  });

  const url = `${API_ENDPOINT}?${urlParams.join('&')}`;

  return fetch(url);
}

export default get;
