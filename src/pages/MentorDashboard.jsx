import React, { useState } from 'react'
import MentorStats from '../components/MentorStarts';
import AlbumList from '../components/AlbumList';
import VideoList from '../components/VideoList';
import { IoMdLogOut } from "react-icons/io";

import './MentorDashboard.css';

const MentorDashboard = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className='mentor-dashboard'>
      <div className='mentor-header'>
        <h1>Welcome Back, <span>Sadiq</span></h1>
        <button className='logout' title='logout'>
          <IoMdLogOut size={24} />
        </button>
      </div>
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
