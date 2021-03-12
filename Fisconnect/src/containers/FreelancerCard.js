import React from 'react';
import './Freelancers.css';
import PropTypes from 'prop-types';
import { LinkContainer } from "react-router-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap';


function FreelancerCard(props) {
  let {
    freelancer
  } = props;


    return (
      
      <Col xs={12} md={6} lg={4} xl={3}>
          <Card className="freelancer_card yellow-font" key={freelancer.id} style={{flex: 1, justifyContent: 'center'}}>        

              <Image className="card_image" variant="top" src={freelancer.thumbnail} rounded/> 

              <Card.Body>
              <Image className="profile_pic" src="./images/profilepic1.jpg" roundedCircle />
                <LinkContainer to={`freelancers/portfolio/${freelancer.id}`}>
                  
                  <Card.Title className="card_btn">{freelancer.name}</Card.Title>
                </LinkContainer>
                <Card.Subtitle>{freelancer.job_title}</Card.Subtitle>
                <Card.Text>{freelancer.sector}</Card.Text>

              </Card.Body>
              
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  See More
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <ListGroup className="list-group">
                    <ListGroup.Item>{freelancer.card_description}</ListGroup.Item>
                    <ListGroup.Item>Full Day Rate: {freelancer.full_day_rate}</ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>

              {/* Separate button at bottom */}
              {/* <Card.Body>
                <LinkContainer to={`freelancers/portfolio/${freelancer.id}`}>
                      <button className="btn">Check out my portfolio</button>
                </LinkContainer>
              </Card.Body> */}

          </Card>
        </ Col>
    );
}

FreelancerCard.propTypes = {
  freelancer: PropTypes.object.isRequired
};

export default FreelancerCard;