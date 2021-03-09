import React from "react";
import { Container } from 'react-bootstrap';
import freelancer_info from "../data/freelancer_data";
import FreelancerList from '../containers/FreelancerList.js';
import FreelancerHeader from '../containers/FreelancerHeader.js';
import Footer from '../containers/Footer.js';
import './Freelancers.css';

class Freelancers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      freelancer_info: freelancer_info.slice(0, 20)
    };
  }

  render() {
      console.log(this.state);
  
      return (

        <Container id="content">
          <FreelancerHeader />
          <FreelancerList
            freelancer_info={this.state.freelancer_info} />
          <Footer />
        </Container>
      );
    }
}
  
export default Freelancers;


// Don't delete - alternative way

// const FreelancerBrowse = () => {
//   console.log(freelancer_info);
//   const freelancerList = freelancer_info.map((freelancer) =>
//     <div className="freelancer_card" key={freelancer.id}>
//       <div className="card_thumbnail">
//         <img src={freelancer.thumbnail} />
//       </div>
//       <div className="card_header">
//         <h2>{freelancer.name}</h2>
//         <h3>{freelancer.job_title}</h3>
//         <p>{freelancer.sector}</p>
//         <p className="price">{freelancer.full_day_rate}</p>
//         <div className="btn">See more</div>
//       </div>

//     </div>
//   );


  // return(
  //   <div className="main_content">
  //     <h1>Browse Freelancers</h1>
  //     {freelancerList}
  //   </div>
  // )


//export default FreelancerBrowse;