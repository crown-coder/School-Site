import React, { useState } from 'react';
import './AlbumList.css';

const AlbumList = ({ onSelectAlbum }) => {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'React Basics', description: 'Beginner React tutorials' },
    { id: 2, title: 'UI/UX Design', description: 'Principles of UI/UX' },
  ]);

  const addAlbum = () => {
    const newAlbum = {
      id: Date.now(),
      title: prompt('Enter album title:'),
      description: prompt('Enter album description:'),
    };
    setAlbums([...albums, newAlbum]);
  };

  const deleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  return (
    <div className="album-list">
      <h2>Albums</h2>
      <button onClick={addAlbum}>Add Album</button>
      <ul>
        {albums.map(album => (
          <li key={album.id} onClick={() => onSelectAlbum(album)}>
            <h3>{album.title}</h3>
            <p>{album.description}</p>
            <button onClick={(e) => { e.stopPropagation(); deleteAlbum(album.id); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
