import './Home.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { LinkContainer} from "react-router-bootstrap";
import {Link} from 'react-router-dom'
import SubmitProjectForm from './SubmitProjectForm.js'
import NavigationBar from './NavigationBar.js'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Home" style={{ backgroundImage: "url(../../images/Homepage2.jpg)"}} id="background_img">
      <NavigationBar/>
      <Container className="homepageWelcome blue-font d-flex align-items-center">
        <div className="center-align">
          <LinkContainer to="/aboutus">
            <h1 className="font-weight-bold title">Bubble Vision</h1>  
          </LinkContainer>
          
          <h3 className="font-weight-bold title">Connecting Businesses to Freelance Videographers and Photographers</h3>
        </div>

      </Container>

      <Row className="buttons">
        <Col className="d-flex justify-content-center">
        <Button id="home_btn" >
            <Link id="btn_link" to="/freelancers">Browse Freelancers</Link>
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button id="home_btn" onClick={handleShow}>Submit a Project Idea!</Button>
        </Col>
      </Row>  

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send us your visual content needs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Send us a description of what sort of content you are looking for. Our experts will match you 
            with the most appropriate freelancer
          </p>
          <SubmitProjectForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;
