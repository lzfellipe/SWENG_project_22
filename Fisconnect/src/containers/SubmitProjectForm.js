import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import * as emailjs from "emailjs-com";

function SubmitProjectForm() {
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

        You got a new project idea from {{name}}.

        Details are as follows:

        Subject: {{subject}}

        Email: {{email}}

        Project details are:

        {{projDetails}}
        
        */

    function sendEmail(e){
        e.preventDefault();


    emailjs.sendForm('gmail', 'template_project_details', e.target, 'user_vD1r0QZwdo7HZhvbbV60H')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit, sendEmail}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" name="name" />
                <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control required type="text" placeholder="Enter subject" name="subject" />
                <Form.Control.Feedback type="invalid">Please enter a subject!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="name@example.com" name="email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Project Details</Form.Label>
                <Form.Control required as="textarea" rows={5} placeholder="Enter details of your project here" name="projDetails" />
                <Form.Control.Feedback type="invalid">Please enter your project details!</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default SubmitProjectForm;