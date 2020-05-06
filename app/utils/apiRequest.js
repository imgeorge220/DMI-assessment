/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkError(response) {
  if (response.status === 200) return response;

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Handles an API request to a given url
 *
 * @param  {string} url the API endpoint
 *
 * @return {object|undefined} Returns either the response (in json), or throws an error
 */
export default function ApiRequest(url) {
  return fetch(url)
    .then(checkError())
    .then(response => response.json());
}
