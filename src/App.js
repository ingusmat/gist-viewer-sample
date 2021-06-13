import React, { useState, useEffect } from 'react';
import './App.css';
import UserNameForm from './components/userNameForm';
import GistList from './components/gistList/GistList';
import SingleGist from './components/gistList/SingleGist';
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

  const updateSelectedGist = (gistId) => {
    setSelectedGist(gistId);
  };

  const toggleFavorite = (gistId) => {
    console.log(gistId);
    const newGists = gists.map((gist) => {
      if (gist.id !== gistId) {
        return gist;
      }

      return {...gist, isFavorite: !gist.isFavorite};
    });

    setGists(newGists);
  }

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
        {gists.length > 0 && !selectedGist &&
          <GistList
            gists={gists}
            updateSelectedGist={updateSelectedGist}
            toggleFavorite={toggleFavorite}
          />
        }
        {selectedGist &&
          <SingleGist
            gist={gists.filter((g) => g.id === selectedGist)[0]}
            returnToList={() => setSelectedGist()}
            toggleFavorite={toggleFavorite}
          />
        }
      </main>
      <AppFooter userName={userName} gists={gists} />
    </div>
  );
}

export default App;
