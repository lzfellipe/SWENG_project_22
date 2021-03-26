import { Component } from "react";
import { Row, Col, Form } from 'react-bootstrap'


const Filters = ({ setSearchQuery }) => {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   }

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
    return (
    //   <div onChange={this.onChangeValue}>
    <div>
        <Form>
            <Row>
            <Col>
            <input
                type="radio" 
                value="videographer" 
                name="type" 
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Videographer
            </Col>
            <Col>
            <input 
                type="radio"
                value="photographer"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Photographer
            </Col>
            </Row>
            <Row>
            <Col>
            <input
                type="radio" 
                value="_events" 
                name="type" 
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Events
            </Col>
            <Col>
            <input 
                type="radio"
                value="_retail"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Retail
            </Col>
            <Col>
            <input 
                type="radio"
                value="_hospitality"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Hospitality
            </Col>
            <Col>
            <input 
                type="radio"
                value="_corporate"
                name="type"
                onChange={(e) => setSearchQuery(e.target.value)}
            /> Corporate
            </Col>
            </Row>
        </Form>
    </div>



    );
  }

export default Filters;