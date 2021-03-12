//for now i just copied the home page for testing

import './Portfolio.css';
import'bootstrap/dist/css/bootstrap.css';
import { Container, Carousel, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import { useParams } from 'react-router';
import freelancer_info from "../data/freelancer_data";

function Portfolio(props) {
    const {id} = useParams();
    const freelancer = freelancer_info[id];

  return (
    <div className="Portfolio shadow-lg p-3 mb-5">
        <Carousel className="main_carousel">
        {freelancer.photos.map(photo => (
          <Carousel.Item>
            <img src={photo}/>
            <Carousel.Caption classname="carousel_caption">
             <h1>test portfolio Carousel</h1>
             <h1>it just works.</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
        
        <div>
          <h1></h1>
        </div>

        <div class="biography shadow-lg p-3 mb-5" fluid="md">
          <Row>
            <Col xs={3}>
              <h2>{freelancer.name}</h2>
              <img src={freelancer.profile_photo}></img>
            </Col>
            <Col>
              <Row> <h2>Biogrpahy</h2> </Row>
              <Row>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </h3>
              </Row>
            </Col>
            <Col xs={3}>
              <Row> <h2>Years Experience</h2></Row>
              <Row> <h3>{freelancer.experience_years}</h3></Row>
              
              <Row> <h2>Clients</h2> </Row>
              <Row> <h3>Generic Rock Band, Pop Duo, Lady Gaga Country Folk Cover Band </h3> </Row>

              <Row> <h2>Certifications</h2> </Row>
              <Row> <h3>Jack Blacks School Of Rock</h3> </Row>

              <Row> <h2>Equipment</h2> </Row>
              <Row> <h3>Camera(Duh), Generic Brand Microphone, Large Pot Of Chilli(con carne), Certified Handsome(source: grandma)</h3> </Row>
            </Col>
          </Row>
        </div>
    </div>

  );
}

export default Portfolio;
