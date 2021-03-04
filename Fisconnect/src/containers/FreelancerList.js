import React from 'react';
import FreelancerCard from './FreelancerCard.js';
import PropTypes from 'prop-types';
import CardDeck from 'react-bootstrap/CardDeck';

class FreelancerList extends React.Component {
  render() {
    return (
      // <div>
      <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        {
          this.props.freelancer_info.map(freelancer => (
            <FreelancerCard
              key={freelancer.id}
              freelancer={freelancer} />
          ))
        }
        </CardDeck>

      /* </div> */

    );
  }
}

FreelancerList.propTypes = {
  freelancer_info: PropTypes.arrayOf(PropTypes.object).isRequired
};

FreelancerList.defaultProps = {
  freelancer_info: []
};

export default FreelancerList;