import React, { useState } from 'react';
import './VideoList.css';

const VideoList = ({ album, onClearSelection }) => {
  const [videos, setVideos] = useState([
    { id: 1, title: 'Intro to React', link: 'https://youtube.com/video1' },
    { id: 2, title: 'React State Management', link: 'https://youtube.com/video2' },
  ]);

  const addVideo = () => {
    const newVideo = {
      id: Date.now(),
      title: prompt('Enter video title:'),
      link: prompt('Enter YouTube link:'),
    };
    setVideos([...videos, newVideo]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="video-list">
      <h2>Videos in "{album.title}"</h2>
      <button onClick={addVideo}>Add Video</button>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              Watch
            </a>
            <button onClick={() => deleteVideo(video.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={onClearSelection}>Back to Albums</button>
    </div>
  );
};

export default VideoList;
