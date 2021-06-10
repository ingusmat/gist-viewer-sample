import React, { useState, useEffect } from 'react';
import './App.css';
import UserNameForm from './components/userNameForm';
import GistList from './components/gistList/GistList';
import sampleGists from './fixtures/sampleGists';

function App() {

  const [userName, setUserName] = useState('');
  const [gists, setGists] = useState ([]);

  useEffect(() => {
    if(userName) {
      console.log(`userName is ${userName}`);
      setGists(sampleGists);
    }
  }, [userName]);


  const updateUserName = (e, returnedUserName) => {
    e.preventDefault();
    setUserName(returnedUserName);
  }


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gist Viewer</h1>
        {!userName && <UserNameForm onSubmit={updateUserName} />}
        {gists.length > 0 && <GistList gists={gists} />}
      </header>
    </div>
  );
}

export default App;
