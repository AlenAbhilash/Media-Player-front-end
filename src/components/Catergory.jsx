import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, FloatingLabel, Col } from 'react-bootstrap';
import { addCategoryApi, DelteCategoryApi, getAuploadVideosApi, getCategoryApi, UpdateCategoryApi } from '../../services/allApi';
import VideoCard from './VideoCard';

function Category({ videoDroppedresponse }) {
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategoryName] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    getCategories();
  }, [videoDroppedresponse]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteCategory = async (id) => {
    await DelteCategoryApi(id);
    getCategories();
  };

  const getCategories = async () => {
    const { data } = await getCategoryApi();
    setAllCategoryName(data);
    console.log(data);
  };

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryApi({ CatergoryName: categoryName, allvideos: [] });
      if (result.status >= 200 && result.status <= 300) {
        handleClose();
        setCategoryName('');
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("Please fill in the missing fields");
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log("Video card dragged over the category");
  };

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData('VideoID');
    console.log("Video ID " + videoId + " dropped into category " + categoryId);
    const { data } = await getAuploadVideosApi(videoId);
    const selectedCategory = allCategory.find(item => item.id === categoryId);
    selectedCategory.allvideos.push(data);
    console.log(selectedCategory);
    const res = await UpdateCategoryApi(categoryId, selectedCategory);
    console.log(res);
    getCategories();
  };

  const videoDragStarted = (e, videoid, categoryId) => {
    let dataShare = { videoid, categoryId };
    e.dataTransfer.setData("data", JSON.stringify(dataShare));
    console.log("Video ID: ", videoid, " Category ID: ", categoryId);
  };

  return (
    <>
      <div className="d-grid m-4" onClick={handleShow}>
        <Button className='btn btn-info'>Add Category</Button>
      </div>
      <Modal className='m-2'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId='floatingName' label="Category" className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Enter Category Name'
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <div className="overflow-auto" style={{ maxHeight: '500px' }}>
        {allCategory.length > 0 ? (
          allCategory.map(category => (
            <div
              className="border rounded p-4 m-2"
              key={category.id}
              onDragOver={dragOver}
              onDrop={e => videoDropped(e, category.id)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5>{category.CatergoryName}</h5>
                <Button variant='danger' onClick={() => handleDeleteCategory(category.id)}>
                  <i className="fa-solid fa-trash fa-fade"></i>
                </Button>
              </div>
              {category.allvideos.length > 0 ? (
                category.allvideos.map((video, index) => (
                  <Col sm={12} md={4} lg={3} key={index} className='m-3' draggable onDragStart={e => videoDragStarted(e, video?.id, category?.id)}>
                    <VideoCard videos={video} insideCategorry={false} />
                  </Col>
                ))
              ) : (
                <p>No videos available</p>
              )}
            </div>
          ))
        ) : (
          <p>Nothing to Display</p>
        )}
      </div>
    </>
  );
}

export default Category;
