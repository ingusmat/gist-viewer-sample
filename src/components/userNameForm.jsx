import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextBox from './ui/TextBox';

const UserNameForm =  ({ onSubmit }) => {
  const [currentUN, setCurrentUN] = useState('');

  return (
    <form onSubmit={(e) => onSubmit(e, currentUN)}>
      <TextBox id="user_name" onChange={setCurrentUN} val={currentUN} />
      <button type='submit'>Submit</button>
    </form>
  );
}

UserNameForm.propTypes = {
  onSubmit: PropTypes.func,
};

UserNameForm.defaultProps = {
  onSubmit: null,
};

export default UserNameForm;
