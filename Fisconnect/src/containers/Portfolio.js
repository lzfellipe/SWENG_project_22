//for now i just copied the home page for testing

import './Portfolio.css';
import'bootstrap/dist/css/bootstrap.css';
import { Container, Carousel, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import { useParams } from 'react-router';
import freelancer_info from "../data/freelancer_data";
import Image from 'react-bootstrap/Image';

function Portfolio(props) {
    const {id} = useParams();
    const freelancer = freelancer_info[id];

  return (
    <div className="Portfolio">
      <Container>
        <img src="../../images/thumb1.jpg" />
        <Carousel>
        {freelancer.photos.map(photo => (
          <Carousel.Item>
            <img src={photo}/>
            <Carousel.Caption>
             <h3>test portfolio Carousel</h3>
             <h1>it just works.</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
      </Container>
    
     
    </div>

  );
}

export default Portfolio;
