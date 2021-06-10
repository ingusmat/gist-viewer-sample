import React, { useState, useEffect } from 'react';
import './App.css';
import UserNameForm from './components/userNameForm';
import GistList from './components/gistList/GistList';
import sampleGists from './fixtures/sampleGists';
import AppFooter from './components/appFooter/AppFooter';

function App() {

  const [userName, setUserName] = useState('');
  const [gists, setGists] = useState ([]);
  const [selectedGist, setSelectedGist] = useState (null);

  useEffect(() => {
    if(userName) {
      console.log(`userName is ${userName}`);
      setGists(sampleGists);
    }
  }, [userName]);

  const updateSelectedGist = (e, gistId) => {
    e.preventDefault();
    setSelectedGist(gistId);
  };

  const updateUserName = (e, returnedUserName) => {
    e.preventDefault();
    setUserName(returnedUserName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gist Viewer</h1>
      </header>
      <main>
        {!userName && <UserNameForm onSubmit={updateUserName} />}
        {gists.length > 0 && <GistList gists={gists} />}
      </main>
      <AppFooter userName={userName} gists={gists} />
    </div>
  );
}

export default App;
