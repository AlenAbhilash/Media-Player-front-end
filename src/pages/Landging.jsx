import React from 'react'
import { Col } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Landging() {
  const navhome = useNavigate()
  return (
    <>
      <div className="row mt-5 align-items-center justify-content-center w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis eum omnis, ea sequi sapiente praesentium! Rem autem eveniet, nesciunt unde, eligendi illum debitis deserunt, illo et nobis accusamus rerum!</p>
          <button className='p-2' style={{ backgroundColor: "blueviolet", color: "white", borderRadius: "10px" }} onClick={() => navhome('/home')}>Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://images.pexels.com/photos/16897649/pexels-photo-16897649/free-photo-of-a-girl-sitting-in-a-car-listening-to-music-on-her-smartphone-and-looking-at-song-lyrics.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='my-3 rounded-5' /></Col>
        <Col></Col>
      </div>
      <div className="container mb-5 align-items-center justify-content-center w-100 my-5">
        <h3 className='text-center fw-bold'>Fetures</h3>
        <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }} className='my-5'>
          <MDBCard style={{ width: "360px" }}>
            <MDBCardImage src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600' position='top' alt='...' className='rounded' />
            <MDBCardBody>
              <MDBCardTitle>Videos</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "360px" }}>
            <MDBCardImage src='https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Music</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "360px" }}>
            <MDBCardImage src='https://images.pexels.com/photos/65718/pexels-photo-65718.jpeg?auto=compress&cs=tinysrgb&w=600' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Play List</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <div className="container border rounded p-4 border mt-5 d-flex p-5 align-content-center my-5 gap-5">
        <div className='col-lg-5'>
          <h4>
            <span className='text-white'>Simple & And Fast</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor velit
              dolore iusto pariatur sunt voluptatibus neque nihil illo, a atque praesentium
              quis cum saepe eos dolorem error eveniet consequuntur?
            </span>
          </h6>
          <h4>
            <span className='text-white'>Media Player</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor velit
              dolore iusto pariatur sunt voluptatibus neque nihil illo, a atque praesentium
              quis cum saepe eos dolorem error eveniet consequuntur?
            </span>
          </h6>
          <h4>
            <span className='text-white'>Video Player</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor velit
              dolore iusto pariatur sunt voluptatibus neque nihil illo, a atque praesentium
              quis cum saepe eos dolorem error eveniet consequuntur?
            </span>
          </h6>
        </div>
        <div className="col-lg-5 mt-5 rounded-4">
          <iframe width="560" height="315" className='rounded-5' src="https://www.youtube.com/embed/UImrau29cu8?si=LPUGzM-7ifccBbz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landging