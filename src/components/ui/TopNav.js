import React from 'react';
import PropTypes from 'prop-types';

const TopNav = ({
  loggedIn,
  logout,
  setFavoritesOnly,
  isFavoritesOnly,
  children 
}) => {

  return (
    <header className="App-header">
      {children}
        <nav>
          <ul>
            <li>
              <button disabled={isFavoritesOnly} onClick={() => setFavoritesOnly(true)}>favorites only</button>
              <button disabled={!isFavoritesOnly} onClick={() => setFavoritesOnly(false)}>all</button>
            </li>
            <li>{loggedIn && <button onClick={logout}>logout</button>}</li>
          </ul>
        </nav>
    </header>
  )
};

TopNav.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
  setFavoritesOnly: PropTypes.func,
  isFavoritesOnly: PropTypes.bool,
  children: PropTypes.node, 
}

TopNav.defaultProps = {
  loggedIn: false,
  logout: null,
  setFavoritesOnly: null,
  isFavoritesOnly: false,
  children: null, 
}
export default TopNav;
