import React, { useState } from 'react';
import TextBox from './ui/textbox';

const UserNameForm =  ({ onSubmit }) => {
  const [currentUN, setCurrentUN] = useState('');

  return (
    <form onSubmit={(e) => onSubmit(e, currentUN)}>
      <TextBox id="user_name" onChange={setCurrentUN} val={currentUN} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserNameForm;
