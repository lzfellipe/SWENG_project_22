import React from "react";
import { Image, Container } from 'react-bootstrap';
import Footer from '../containers/Footer.js';
import './AboutUs.css';
import NavigationBar from '../containers/NavigationBar.js'

function AboutUs(props) {

  return (
  <div className="blue-background">
   <div className="AboutUs">
      <NavigationBar />
        <div className="m-3 p-2">
            <h1>Who We Are</h1>
            <br/>
            <p>
              Consider us the Airbnb of visual content creation!
              Bubble Vision is a platform for sourcing visual content creation - 
              we match your visual content
              needs with only the best standard 
              videographers & photographers. 
              <br/><br/>
              Browse our listed freelancers now,
              or send us your visual content needs and we will do the matching for you!
            </p>
          </div>

          <div className="m-3 p-2">
            <h1>Why Bubble Vision?</h1>
            <br/>
            <p>
              We connect small enterprises to talented visual content freelancers.
            </p>

          </div>

          <div className="m-3 p-2">
            <h1>Our Offering</h1>
            <br/>
            <p>
            Source a content creator to stay competitive and more relevant than your competitors.
            <br/><br/>
            We connect businesses with certified, highly experienced freelancers that can execute premium visual content at amore affordable price rather than hiring a full-service agency. 
            <br/><br/>
            Bubblevision provides businesses with an online hub to conveniently choose from a broad bank of freelancers in one location.
            </p>
          </div>
      
      </div> 
      <Footer />
   </div>
  );
}

export default AboutUs;