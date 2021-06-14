/**
 * @decorator
 * @param {Event} e
 * @param {function} func
 *
 * (P)revents (D)efault click behavior, (A)nd returns the provided function
 */
const pdAnd = (e, func) => {
  e.preventDefault();

  return func;
};

export default pdAnd;
