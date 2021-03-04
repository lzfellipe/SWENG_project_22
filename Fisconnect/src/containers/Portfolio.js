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
    <div className="Portfolio">
      <Container fluid className="Portfolio">
        <h1>{freelancer.name}, {freelancer.job_title}</h1>
        <h1>Full Day Rate Of {freelancer.full_day_rate}</h1>
        <h1>{freelancer.experience_years} Years Of Experience</h1>
        <h2>Specialises in {freelancer.sector}</h2>
      </Container>
    </div>

  );
}

export default Portfolio;
