import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAlluploadVideosApi, DeleteVideosApi, getCategoryApi, UpdateCategoryApi } from '../../services/allApi';

function View({ uploadVideosResponses, setvideoDroppedresponses }) {

  const [allVidoes, setAllVideos] = useState([]);
  useEffect(() => {
    getAllvideos();
  }, [uploadVideosResponses]);

  const getAllvideos = async () => {
    const result = await getAlluploadVideosApi();
    console.log(result);
    if (result.status === 200) {
      console.log(result.data);
      setAllVideos(result.data);
    } else {
      console.log("API Failed");
      setAllVideos([]);
    }
    console.log(allVidoes);
  }

  const DeleteVideo = async (id) => {
    await DeleteVideosApi(id);
    getAllvideos()
  }
  const dragover = (e) => {
    e.preventDefault()
  }
  const videoDropped = async (e) => {
    const { videoid, categoryId } = JSON.parse(e.dataTransfer.getData("data"));
    console.log(videoid, categoryId);
    const { data } = await getCategoryApi();
    const selectedCategory = data.find(item => item.id == categoryId);
    const result = selectedCategory.allvideos.filter(video => video.id !== videoid);
    console.log(result);
    let newCategory = { ...selectedCategory, allvideos: result };
    console.log(newCategory);
    const res = await UpdateCategoryApi(categoryId, newCategory);
    console.log(res);
    setvideoDroppedresponses(res)
  };
  return (
    <>
      <Row droppable="true" onDragOver={e => dragover(e)} onDrop={e => videoDropped(e)}>
        {
          allVidoes?.length > 0 ? allVidoes.map((videos, index) => (
            <Col sm={12} md={4} lg={3} key={index}> {/* Adding a unique key */}
              <VideoCard videos={videos} DeleteVideo={DeleteVideo}  />
            </Col>
          )) : <p className='text-danger fw-bold'>Nothing to Display</p>
        }
      </Row>
    </>
  )
}

export default View;
