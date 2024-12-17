import React, { useState } from 'react';
import './AlbumList.css';

const AlbumList = ({ onSelectAlbum }) => {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'React Basics', description: 'Beginner React tutorials' },
    { id: 2, title: 'UI/UX Design', description: 'Principles of UI/UX' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAlbum, setNewAlbum] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlbum({ ...newAlbum, [name]: value });
  };

  const handleAddAlbum = () => {
    const album = {
      id: Date.now(),
      title: newAlbum.title,
      description: newAlbum.description,
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

      {/* Add Album Button */}
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Album</button>
      )}

      {/* Add Album Form */}
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
              <button type="button" onClick={handleAddAlbum}>
                Save
              </button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Album List */}
      <ul>
        {albums.map(album => (
          <li key={album.id} onClick={() => onSelectAlbum(album)}>
            <h3>{album.title}</h3>
            <p>{album.description}</p>
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
