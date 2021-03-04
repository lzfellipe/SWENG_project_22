import React from 'react';
import FreelancerCard from './FreelancerCard.js';
import PropTypes from 'prop-types';

class FreelancerList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.freelancer_info.map(freelancer => (
            <FreelancerCard
              key={freelancer.id}
              freelancer={freelancer} />
          ))
        }
      </div>
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