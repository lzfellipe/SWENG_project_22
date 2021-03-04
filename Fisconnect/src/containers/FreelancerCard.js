import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from "react-router-bootstrap";

function FreelancerCard(props) {
  let {
    freelancer
  } = props;


    return (
     <div className="freelancer_card" key={freelancer.id}>
        <div className="card_thumbnail">
            <img src={freelancer.thumbnail}/>
        </div>
        <div className="card_header">
            <h2>{freelancer.name}</h2>
            <h3>{freelancer.job_title}</h3>
            <p>{freelancer.sector}</p>
            <p className="price">{freelancer.full_day_rate}</p>
            <LinkContainer to={`freelancers/portfolio/:${freelancer.id}`}>
              <button className="btn">See more</button>
            </LinkContainer>
        </div>
    </div>
    );
}

FreelancerCard.propTypes = {
  freelancer: PropTypes.object.isRequired
};

export default FreelancerCard;