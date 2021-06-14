import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import UserNameForm from './components/userNameForm';
import GistList from './components/gistList/GistList';
import SingleGist from './components/gistList/SingleGist';
import sdk from './sdk/gists';
import AppFooter from './components/appFooter/AppFooter';
import TopNav from './components/ui/TopNav';

function App() {
  const [userName, setUserName] = useState('');
  const [gists, setGists] = useState ([]);
  const [selectedGist, setSelectedGist] = useState (null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  /**
   * @void
   *
   * get the list of gists from the api
   *
   */
  const getGists = useCallback(() => {
    if (userName) {
      if (favoritesOnly) {
        sdk.findFavoritesByUser(userName)
          .then((data) => setGists(data));
      } else {
        sdk.findAllByUser(userName)
          .then((data) => setGists(data));
      }
    }
  }, [userName, favoritesOnly]);

  /* Update gist list when user logs in */
  useEffect(() => {
    if(userName) {
      getGists();
    }
  }, [userName, getGists]);

  /* update gist list when user updates favorite filter yes/no */
  useEffect(() => {
    setSelectedGist(null);
    getGists();
  }, [favoritesOnly, getGists]);

  /**
   * @param {string} gistId
   *
   * call the api to update selected gist,
   * then update the app state
   */
  const updateSelectedGist = (gistId) => {
    sdk.getById(gistId)
      .then((data) => setSelectedGist(data));
  };

  /**
   * @param {string} gistId
   *
   * call the api to update selected gist's favorite status,
   * then update the app state
   */
  const favoritify = (gistId) => {
    sdk.favoriteById(gistId)
      .then(() => {
        const newGists = gists.map((gist) => {
          if (gist.id !== gistId) {
            return gist;
          }

          return {...gist, isFavorite: true};
        });

        setGists(newGists);
      });
  }

  /**
   * @param {string} gistId
   *
   * wow, this should absolutely be refactored.
   */
  const deFavoritify = (gistId) => {
    sdk.favoriteById(gistId)
      .then(() => {
        const newGists = gists.map((gist) => {
          if (gist.id !== gistId) {
            return gist;
          }

          return {...gist, isFavorite: false}
        });

        setGists(newGists);
      });
  }

  /**
   * @param {event} e
   * @param {string} returnedUserName
   *
   * set the updated username to the state
   */
  const updateUserName = (e, returnedUserName) => {
    e.preventDefault();
    setUserName(returnedUserName);
  };

  /**
   * reset to zero/null the gist list and selected gist
   */
  const logoutAndClear = () => {
    setGists([]);
    setSelectedGist(null);
    setUserName('');
  }

  return (
    <div className="App">
      <TopNav
        loggedIn={!!userName}
        logout={logoutAndClear}
        isFavoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
      >
        <h1>Gist Viewer</h1>
        {userName && !selectedGist && <h2>{userName}'s Gists</h2> }
        {selectedGist && <h2>Gist {selectedGist.id}</h2> }
      </TopNav>

      <main>
        {!userName && <UserNameForm onSubmit={updateUserName} />}
        {gists.length > 0 && !selectedGist &&
          <GistList
            gists={gists}
            updateSelectedGist={updateSelectedGist}
            favoritify={favoritify}
            deFavoritify={deFavoritify}
          />
        }
        {selectedGist &&
          <SingleGist
            gist={selectedGist}
            favoritify={favoritify}
            deFavoritify={deFavoritify}
          />
        }
      </main>

      <AppFooter
        userName={userName}
        gists={gists}
        isSelectedGist={!!selectedGist}
        returnToList={() => setSelectedGist()}
      />
    </div>
  );
}

export default App;
