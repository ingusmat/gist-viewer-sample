import React, { useState } from 'react';

const GistList = ({ gists }) => {
  return (
    <ul>
      {gists.map((gist) => (
        <li key={gist.id}>{gist.url}</li>
      ))}
    </ul>
  );
}

export default GistList;
