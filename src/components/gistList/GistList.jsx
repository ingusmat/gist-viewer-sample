import React, { useState } from 'react';
const openGist = (e, url) => {
  e.preventDefault();
  console.log(url);
}

const GistList = ({ gists }) => {
  return (
    <ul class="gist-list">
      {gists.map((gist) => {
        const { description, id, url, createDate } = gist;

        return (
          <li key={id}>
            <button class="star">&#9733;</button>
            <a href={url} onClick={(e) => {openGist(e, url)}}>{description}</a>
            <small>{createDate.toDateString()}</small>
          </li>
        )
      })}
    </ul>
  );
}

export default GistList;
