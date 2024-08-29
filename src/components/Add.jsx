import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { uploadVideosApi } from '../../services/allApi';


function Add({SetUploadVideosResponses}) {
  const [upload, SetUploadVideo] = useState({ id: '', name: '', url: '', link: '' })
  const getUploadYoutube = (e) => {
    const { value } = e.target
    if (value.includes('v=')) {
      let VID = value.split('v=')[1].slice(0, 11);
      console.log(`https://www.youtube.com/embed/${VID}`)
      SetUploadVideo({ ...upload, link: `https://www.youtube.com/embed/${VID}` })
    }
    else {
      SetUploadVideo({ ...upload, link: '' })
    }
  }
  const handeladd = async () => {
    const { id, name, url, link } = upload;
    if (!id || !name || !url || !link) {
      alert("Please fill the Missing Fields")
    } else {
      // Upload The Videos
      const result = await uploadVideosApi(upload);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        alert(" Videp Uploaded")
        handleClose()
        //
       SetUploadVideo({ id: '', name: '', url: '', link: '' })
       SetUploadVideosResponses(prev => [...prev, result.data]);
      }
      else {
        alert(result.message)
      }
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5 align-content-center" >
        <h3 className='m-2'>Upload-Videos</h3>
        <button className='btn' onClick={handleShow}><i class="fa-solid fa-upload fa-fade"></i></button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <FloatingLabel controlId='floatingName' label="Video Id" className='mb-3'>
                  <Form.Control type='text' placeholder='Enter Video Id' onChange={(e) => SetUploadVideo({ ...upload, id: e.target.value })}>
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel controlId='floatingName' label="Video Name" className='mb-3'>
                  <Form.Control type='text' placeholder='Enter Video Name' onChange={(e) => SetUploadVideo({ ...upload, name: e.target.value })}>
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel controlId='floatingName' label="Image Url" className='mb-3'>
                  <Form.Control type='text' placeholder='Enter Image URl' onChange={(e) => SetUploadVideo({ ...upload, url: e.target.value })}>
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel controlId='floatingName' label="Video Url" className='mb-3'>
                  <Form.Control type='text' placeholder='Enter Video link' onChange={getUploadYoutube}>
                  </Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handeladd}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add