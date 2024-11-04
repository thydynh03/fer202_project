// carousal.js
import React, { useState } from "react";
import { Carousel, Modal, Container } from "react-bootstrap";
import '../App.css';

const CarouselComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal(true);
  };

  return (
    <Container fluid className="carousel-container">
      <Carousel id="carouselExample">
        <Carousel.Item>
          <img
            className="d-block w-100 responsive-img carousel-img"
            src={`${process.env.PUBLIC_URL}/images/ca1.jpg`}
            alt="First slide"
            onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/images/ca1.jpg`)}
            style={{ cursor: 'pointer' }}
          />
          <Carousel.Caption>
            <h3>Vie Art</h3>
            <p>If you are looking for traditional Art, the Vie Art is the best option.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 responsive-img carousel-img"
            src={`${process.env.PUBLIC_URL}/images/ca2.jpg`}
            alt="Second slide"
            onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/images/ca2.jpg`)}
            style={{ cursor: 'pointer' }}
          />
          <Carousel.Caption>
            <h3>Vie Art</h3>
            <p>Explore the beauty of art with our exclusive collection.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 responsive-img carousel-img"
            src={`${process.env.PUBLIC_URL}/images/ca3.jpg`}
            alt="Third slide"
            onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/images/ca3.jpg`)}
            style={{ cursor: 'pointer' }}
          />
          <Carousel.Caption>
            <h3>Vie Art</h3>
            <p>Experience timeless elegance with our art pieces.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <img src={modalImage} alt="Full size" className="w-100" />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CarouselComponent;
