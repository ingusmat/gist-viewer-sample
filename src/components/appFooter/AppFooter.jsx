import React from 'react';
import PropTypes from 'prop-types';

const INST_USERNAME = ['Please enter your username above.'];
const INST_GIST_LIST = [
  'Click on any Gist in the list above for a better view.',
  'Click on the star to toggle favorite status'
];

const AppFooter = ({ userName, isSelectedGist, returnToList }) => {
  let instructions = [];
  if (!userName) {
    instructions = INST_USERNAME;
  } else if (!isSelectedGist) {
    instructions = INST_GIST_LIST;
  }

  return (
    <footer>
      {instructions.map((inst, ind) => (
        <div key={`inst_${ind}`}>{inst}</div>
      ))}
      {isSelectedGist && <button onClick={returnToList}>back to list</button>}
    </footer>
  )
}

AppFooter.propTypes = {
  userName: PropTypes.string,
  isSelectedGist: PropTypes.bool,
  returnToList: PropTypes.func,
}

AppFooter.defaultProps = {
  userName: '',
  isSelectedGist: false,
  returnToList: null,
}

export default AppFooter;
