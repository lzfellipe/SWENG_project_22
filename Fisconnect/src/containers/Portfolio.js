//for now i just copied the home page for testing

import './Portfolio.css';
import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import { useParams } from 'react-router';
import freelancer_info from "../data/freelancer_data";

function Portfolio(props) {
    const {id} = useParams();
    const freelancer = freelancer_info[id];

  return (
    <div className="Home">
      <Container fluid className="Portfolio">
        <h1>Id:{id}</h1>
        <h3>Name:{freelancer.name}</h3>
      </Container>
    </div>

  );
}

export default Portfolio;
