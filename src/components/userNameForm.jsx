import React, { useState } from 'react';
import TextBox from './ui/textbox';

const USERNAME_LABEL = 'Please enter your username';

const UserNameForm =  ({ onSubmit }) => {
  const [currentUN, setCurrentUN] = useState('');

  return (
    <form onSubmit={(e) => onSubmit(e, currentUN)}>
      <TextBox label={USERNAME_LABEL} onChange={setCurrentUN} val={currentUN} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserNameForm;
