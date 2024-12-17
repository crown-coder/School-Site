import React, { useState } from 'react'
import MentorStats from '../components/MentorStarts';
import AlbumList from '../components/AlbumList';
import VideoList from '../components/VideoList';
import './MentorDashboard.css';

const MentorDashboard = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className='mentor-dashboard'>
      <h1>Mentor Dashboard</h1>
      {/* Stats Section */}
      <MentorStats />
      {/* Album Management Section */}
      <AlbumList onSelectAlbum={setSelectedAlbum} />

      {/* Video Management Section */}
      {selectedAlbum && (
        <VideoList album={selectedAlbum} onClearSelection={() => setSelectedAlbum(null)} />
      )}
    </div>
  )
}

export default MentorDashboard
