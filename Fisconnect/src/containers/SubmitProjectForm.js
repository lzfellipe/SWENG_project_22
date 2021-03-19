import { Form, Button } from 'react-bootstrap';

function SubmitProjectForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control type="email" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Project Details</Form.Label>
                <Form.Control type="email" placeholder="Enter details of your project here" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default SubmitProjectForm;