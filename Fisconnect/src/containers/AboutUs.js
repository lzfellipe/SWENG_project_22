import React from "react";
import { Container } from 'react-bootstrap';
import freelancer_info from "../data/freelancer_data";
import FreelancerList from '../containers/FreelancerList.js';
import FreelancerHeader from '../containers/FreelancerHeader.js';
import Footer from '../containers/Footer.js';
import SearchBar from '../containers/SearchBar.js';
import Filters from '../containers/FreelancerFilters.js';
import { useState } from 'react';
import './AboutUs.css';

function AboutUs(props) {

  return (
   <div className="AboutUs">
      <div>
        <row>
            <container fluid className="WhoWeAre">
                <h1>
                Who We Are
                </h1>
                <h2>
                Consider us the Airbnb of visual content creation!
                Físconnect is a platform for sourcing visual content creation - 
                we match your visual content
                needs with only the best standard 
                videographers & photographers. 
                Browse our listed freelancers now,
                or send us your visual content needs and we will do the matching for you!
                </h2>
                <h1>
                Why Bubblevision
                </h1>
                <h2>
                We connect Small enterprises to talented visual content Freelancers.
                </h2>
                <h1>
                Our Offering
                </h1>
                <h2>
                Source a content creator to stay competitive and more relevant than your competitors.
                </h2>
                <row></row>
                <h2>
                We connect businesses with certified, highly experienced freelancers that can execute premium visual content at amore affordable price rather than hiring a full-service agency. 
                </h2>
                <row><h1></h1></row>
                <h2>
                Bubblevision provides businesses with an online hub to conveniently choose from a broad bank of freelancers in one location.
                </h2>
                <row><h1></h1></row>
                <h2>
                Not convinced yet? Click below to see how visual content can improve your customer image and awareness, leading to more conversions
                </h2>
            </container>    
        </row>   
      </div>
      <Footer />
   </div>
  );
}

export default AboutUs;