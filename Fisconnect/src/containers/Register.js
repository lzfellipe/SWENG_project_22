import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Register.css';
import { useState } from 'react';

function Register(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (

        <Container fluid className="RegisterButton" id="background_img_register">
            <h1>COME WORK WITH US</h1>
            <h5>1. Consistent job placements.</h5>
            <h5>2. Seamless invoice management systems</h5>
            <h5>3. Steady cashflows<br></br><br></br></h5>



            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="John" />
                        <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Smith" />
                        <Form.Control.Feedback type="invalid">Please enter your last name!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />

                        <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required type="text" placeholder="0124567890" />
                        <Form.Control.Feedback type="invalid">Please enter your phone number!</Form.Control.Feedback>

                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Select Date to Start</Form.Label>
                        <Form.Control required type="date" placeholder="01-01-2021" />
                        <Form.Control.Feedback type="invalid">Please enter the start date</Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridExpertise">
                        <Form.Label>Expertise</Form.Label>
                        <Form.Control required as="select" defaultValue="Choose...">
                            <option>Photographer</option>
                            <option>Videographer</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h6>Once we receive your application we will be in touch to begin your screening process.</h6>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>


    );
}
export default Register;