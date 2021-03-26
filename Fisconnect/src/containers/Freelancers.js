import React from "react";
import { Container } from 'react-bootstrap';
import freelancer_info from "../data/freelancer_data";
import FreelancerList from '../containers/FreelancerList.js';
import FreelancerHeader from '../containers/FreelancerHeader.js';
import Footer from '../containers/Footer.js';
import SearchBar from '../containers/SearchBar.js';
import Filters from '../containers/FreelancerFilters.js';
import { useState } from 'react';
import './Freelancers.css';


const filterFreelancers = (cards, query) => {
  if (!query) {
      return cards;
  }

  if(query == "videographer") {
    return cards.filter((card) => {
      const cardType = card.job_title.toLowerCase();
      return cardType.includes(query);
    });
  }

  else if(query == "photographer") {
    return cards.filter((card) => {
      const cardType = card.job_title.toLowerCase();
      return cardType.includes(query);
    });
  }

  else if(query.startsWith("_")) {
    query = query.substring(1);
    return cards.filter((card) => {
      const cardType = card.sector.toLowerCase();
      return cardType.includes(query);
    });
  }

  return cards.filter((card) => {
      const cardName = card.name.toLowerCase();
      return cardName.includes(query);
  });
};

  
function Freelancers() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredFreelancers = filterFreelancers(freelancer_info, searchQuery);

{/*  render() {
console.log(this.state); */}
  
      return (

        <Container className="content">
          <FreelancerHeader />
          <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <Filters
              setSearchQuery={setSearchQuery}
          />
          <FreelancerList
            freelancer_info={filteredFreelancers} />
          <Footer />
        </Container>
      );
    // }
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