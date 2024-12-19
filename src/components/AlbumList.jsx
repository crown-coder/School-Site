import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactThumbnail from '../assets/react.jpeg';
import UiUx from '../assets/ui:ux.jpeg';

import './AlbumList.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'React Basics', description: 'Beginner React tutorials', imageUrl: ReactThumbnail },
    { id: 2, title: 'UI/UX Design', description: 'Principles of UI/UX', imageUrl: UiUx },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAlbum, setNewAlbum] = useState({ title: '', description: '' });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlbum({ ...newAlbum, [name]: value });
  };

  const handleAddAlbum = () => {
    const album = {
      id: Date.now(),
      title: newAlbum.title,
      description: newAlbum.description,
      imageUrl: ReactThumbnail, // Placeholder image
    };
    setAlbums([...albums, album]);
    setShowForm(false);
    setNewAlbum({ title: '', description: '' }); // Reset form
  };

  const deleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  return (
    <div className="album-list">
      <h2>Albums</h2>

      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-album">Add Album</button>
      )}

      {showForm && (
        <div className="album-form">
          <h3>Create New Album</h3>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newAlbum.title}
                onChange={handleInputChange}
                placeholder="Enter album title"
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={newAlbum.description}
                onChange={handleInputChange}
                placeholder="Enter album description"
                required
              />
            </label>
            <div className="form-buttons">
              <button type="button" onClick={handleAddAlbum}>Save</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <ul>
        {albums.map(album => (
          <li key={album.id} onClick={() => navigate(`/album/${album.id}`, { state: album })} className="course-card">
            <h3>{album.title}</h3>
            <img src={album.imageUrl} alt={album.title} />
            <p className="description-text">{album.description}</p>
            <button onClick={(e) => { e.stopPropagation(); deleteAlbum(album.id); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
