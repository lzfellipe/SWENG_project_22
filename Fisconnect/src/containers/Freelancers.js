import React from "react";
import freelancer_info from "../data/freelancer_data";
import './Freelancers.css';

// function FreelancerBrowse() {

//      return (
//        <div>
//          <p>This is the freelancer page.</p>
//        </div>
//      );

//  }

const FreelancerBrowse = () => {
  console.log(freelancer_info);
  const freelancerList = freelancer_info.map((freelancer) =>
    <div className="freelancer_card" key={freelancer.id}>
      <div className="card_thumbnail">
        <img src={freelancer.thumbnail} />
      </div>
      <div className="card_header">
        <h2>{freelancer.name}</h2>
        <h3>{freelancer.job_title}</h3>
        <p>{freelancer.sector}</p>
        <p className="price">{freelancer.full_day_rate}</p>
        <div className="btn">See more</div>
      </div>

    </div>
  );

  return(
    <div className="main_content">
      <h1>Browse Freelancers</h1>
      {freelancerList}
    </div>
  )

}

export default FreelancerBrowse;