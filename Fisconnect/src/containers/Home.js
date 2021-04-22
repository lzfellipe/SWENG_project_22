import './Home.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { LinkContainer} from "react-router-bootstrap";
import {Link} from 'react-router-dom'
import SubmitProjectForm from './SubmitProjectForm.js'
import NavigationBar from './NavigationBar.js'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <div className="Home" style={{ backgroundImage: "url(../../images/Homepage1.jpg)"}} id="background_img">
      <NavigationBar/>
      </div>

      <div className="Home" style={{ backgroundImage: "url(../../images/Homepage3.jpg)"}} id="background_img"/>

      <div className="Home" style={{ backgroundImage: "url(../../images/Homepage5.png)"}} id="background_img"/>

      <Container>
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
      </Container>

      <ScrollContainer className="homepageWelcome blue-font d-flex align-items-center">
        <ScrollPage page={0}>
          <LinkContainer to="/aboutus">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <h1 className="font-weight-bold title">Bubble Vision</h1>  
            </Animator>
          </LinkContainer>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeUp}>
            <h3 className="font-weight-bold title">Connecting Businesses to Freelance Videographers and Photographers</h3>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h3 className="font-weight-bold title">Find out more below</h3>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

    </div>
  );
}

export default App;
