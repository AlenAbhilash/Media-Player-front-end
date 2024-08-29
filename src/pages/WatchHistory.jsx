import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { DeleteHistoryApi, getHistoryVideosApi } from '../../services/allApi';

function WatchHistory() {
  const [History, SetHistory] = useState([]);

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result = await getHistoryVideosApi();
    if (result.status === 200) {
      SetHistory(result.data);
    } else {
      console.log("Api Failed");
      console.log(result.message);
    }
  }
  const removeVideoHistory = async (id) => {
    await DeleteHistoryApi(id);
    getHistory();
  }

  return (
    <>
      <div className="container mt-5 mb-3 d-flex" style={{ gap: "800px" }}>
        <h2>Watch-History</h2>
        <Link style={{ textDecoration: "none", color: "blueviolet", fontSize: "20px" }} to={'/home'} >
          Back To Home <i className="fa-solid fa-arrow-right fa-fade"></i>
        </Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {History.length > 0 ? (
            History.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video?.name}</td>
                <td><a href={video?.link} target="_blank" rel="noopener noreferrer">{video?.link}</a></td>
                <td>{video.timeStamp}</td>
                <td>
                  <Button variant="danger" onClick={() => removeVideoHistory(video?.id)}><i className="fa-solid fa-trash fa-fade"></i></Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No history Available Here</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory;
