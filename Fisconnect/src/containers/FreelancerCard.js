import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from "react-router-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

function FreelancerCard(props) {
  let {
    freelancer
  } = props;


    return (
     <Card bg="light" className="freelancer_card" key={freelancer.id} style={{flex: 1}}>
        <Image variant="top" src={freelancer.thumbnail} rounded/>
        <Card.Body>
            <Card.Title>{freelancer.name}</Card.Title>
            <Card.Subtitle>{freelancer.job_title}</Card.Subtitle>
            <Card.Text>Brief Description</Card.Text>

        </Card.Body>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            See More
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <ListGroup className="list-group">
              <ListGroup.Item>Sector: {freelancer.sector}</ListGroup.Item>
              <ListGroup.Item>Full Day Rate: {freelancer.full_day_rate}</ListGroup.Item>
            </ListGroup>
          </Accordion.Collapse>
        </Accordion>

        <Card.Body>
          <LinkContainer to={`freelancers/portfolio/id:${freelancer.id}`}>
                <button className="btn">Check out my portfolio</button>
          </LinkContainer>
        </Card.Body>

    </Card>
    );
}

FreelancerCard.propTypes = {
  freelancer: PropTypes.object.isRequired
};

export default FreelancerCard;