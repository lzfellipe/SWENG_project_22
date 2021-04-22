import { Container, Col, Form, Button } from 'react-bootstrap';
import './Register.css';
import { useState } from 'react';
import NavigationBar from '../containers/NavigationBar.js'
import Footer from '../containers/Footer.js'
import * as emailjs from "emailjs-com";

function Register() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    /*  For emails to be sent, an account must be created at emailjs.com. You must create an email service which is linked to your bubble vision email.
        Within the sendform() function there are 4 paramenters. You must fill the parameters with your own details:
        Parameter 1: Service ID
        Parameter 2: Email template to be used
        Parameter 3: DO NOT CHANGE
        Parameter 4: User ID
        
        Sample Email template:

        You got a register request from {{fname}} {{lname}}.

        Personal details are as follows:

        Email: {{email}}

        Phone: {{phone}}

        Start Date: {{startDate}}

        Expertise: {{expertise}}
        
        */

    function sendEmail(e){
        e.preventDefault();


    emailjs.sendForm('gmail', 'register_form_email', e.target, 'user_vD1r0QZwdo7HZhvbbV60H')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className="blue-background yellow-font">
        <NavigationBar />

        <Container fluid className="RegisterButton" id="background_img_register">
            <h1 className="center-align">Come Work With Us!</h1>
            <br/>
            <h5>1. Consistent job placements</h5>
            <h5>2. Seamless invoice management systems</h5>
            <h5>3. Steady cashflows<br></br><br></br></h5>

            <Form noValidate validated={validated} onSubmit={handleSubmit, sendEmail}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="John" name="fname"/>
                        <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Smith" name="lname" />
                        <Form.Control.Feedback type="invalid">Please enter your last name!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" name="email"/>

                        <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required type="text" placeholder="0124567890" name="phone"/>
                        <Form.Control.Feedback type="invalid">Please enter your phone number!</Form.Control.Feedback>

                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Select Date to Start</Form.Label>
                        <Form.Control required type="date" placeholder="01-01-2021" name="startDate" />
                        <Form.Control.Feedback type="invalid">Please enter the start date</Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridExpertise">
                        <Form.Label>Expertise</Form.Label>
                        <Form.Control required as="select" defaultValue="Choose..." name="expertise">
                            <option>Photographer</option>
                            <option>Videographer</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h6>Once we receive your application we will be in touch to begin your screening process.</h6>
                <div className="register-btn">
                    <Button type="submit">Submit</Button>
                </div>
              

            </Form>
        </Container>
        <Footer />
        </div>


    );
}
export default Register;
