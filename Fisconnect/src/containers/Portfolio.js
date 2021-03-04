//for now i just copied the home page for testing

import './Home.css';
import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import { useParams } from 'react-router';

function App() {
    const { id } = useParams();
  return (
    <div className="Home">
      <Container fluid className="homepageWelcome" style={{ backgroundImage: "url(/images/Homepage2.jpg)"}} id="background_img">
        <h1>{id}</h1>
        <h3>TEST</h3>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </div>

  );
}

export default App;
