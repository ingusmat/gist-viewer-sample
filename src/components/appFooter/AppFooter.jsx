import React from 'react';

const INST_USERNAME = ['Please enter your username above.'];
const INST_GIST_LIST = [
  'Click on any Gist in the list above for a better view.',
  'Click on the star to toggle favorite status'
];
const INST_GO_BACK = ['go back'];


const AppFooter = ({ gists = [], userName = '', selectedGist }) => {
  let instructions;
  if (!userName) {
    instructions = INST_USERNAME;
  } else if (!selectedGist) {
    instructions = INST_GIST_LIST;
  } else {
    instructions = INST_GO_BACK;
  }


  return (
    <footer>
      {instructions.map((inst) => (
        <div>{inst}</div>
      ))}
    </footer>
  )

}

export default AppFooter;
