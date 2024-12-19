import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AlbumDetails.css';

const AlbumDetails = () => {
  const location = useLocation();
  const album = location.state;

  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ title: '', url: '', duration: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleAddVideo = () => {
    setVideos([...videos, { ...newVideo, id: Date.now() }]);
    setNewVideo({ title: '', url: '', duration: '' }); // Reset form
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="album-details">
      <h2>{album.title}</h2>
      <div className="add-video-form">
        <h3>Add Video</h3>
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newVideo.title}
              onChange={handleInputChange}
              placeholder="Video Title"
              required
            />
          </label>
          <label>
            URL:
            <input
              type="text"
              name="url"
              value={newVideo.url}
              onChange={handleInputChange}
              placeholder="Video URL"
              required
            />
          </label>
          <label>
            Duration (mins):
            <input
              type="number"
              name="duration"
              value={newVideo.duration}
              onChange={handleInputChange}
              placeholder="Video Duration"
              required
            />
          </label>
          <button type="button" onClick={handleAddVideo}>Add Video</button>
        </form>
      </div>
      <div className="content">
        <div className="video-player left-section">
          {videos.length > 0 ? (
            <iframe
              src={videos[0].url}
              title={videos[0].title}
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <p>No videos to display</p>
          )}
        </div>

        <div className="video-list right-section">
          <h3>Videos in Album</h3>
          {videos.map(video => (
            <div key={video.id} className="video-item">
              <p>{video.title} ({video.duration} mins)</p>
              <button onClick={() => deleteVideo(video.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
