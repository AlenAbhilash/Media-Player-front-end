import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { addVideoHistoryApi } from '../../services/allApi';

function VideoCard({ videos, DeleteVideo, insideCategorry = true }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    const { name, link } = videos;
    let today = new Date();
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(today);

    let videoHistory = { name, link, timeStamp };
    await addVideoHistoryApi(videoHistory);
    console.log(timeStamp);
  };

  const dragStarted = (e, id) => {
    console.log("Drag Started with Video ID:", id);
    e.dataTransfer.setData("VideoID", id);
  };

  return (
    <>
      <div>
        <Card style={{ width: '16rem' }} draggable onDragStart={e => dragStarted(e, videos?.id)}>
          <Card.Img variant="top" src={videos.url} onClick={handleShow} className='w-100' />
          <Card.Body>
            <h4>{videos.name}</h4>
            {insideCategorry && (
              <Button variant="danger" onClick={() => DeleteVideo(videos.id)}>
                <i className="fa-solid fa-trash fa-fade"></i>
              </Button>
            )}
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="470"
              height="315"
              src={`${videos?.link}?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default VideoCard;
