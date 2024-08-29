import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Catergory from '../components/Catergory'
function Home() {
  const [uploadVideosResponses, setUploadVideosResponses] = useState([]);
  const [videoDroppedresponse, setvideoDroppedresponses] = useState([]);
  return (
    <>
      <div className="container mt-3 mb-3 d-flex" style={{ gap: "665px" }}>
        <div className='add-videos me-5'>
          <Add SetUploadVideosResponses={setUploadVideosResponses} />
        </div>
        <div>
          <Link to={'/WatchHistory'}>
            <button className='p-2 rounded-4 mb-5 mt-5' style={{ backgroundColor: "blueviolet", color: "white", border: "none", }}><i class="fa-solid fa-arrow-right fa-fade"></i> Watch History</button>
          </Link>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-3 row">
        <div className="all-videos col-lg-9">
          <h2>All-Videos</h2>
          <View uploadVideosResponses={uploadVideosResponses} setvideoDroppedresponses={setvideoDroppedresponses} />
        </div>
        <div className="category col-lg-3">
          <Catergory videoDroppedresponse={videoDroppedresponse} />
        </div>
      </div>
    </>
  )
}

export default Home