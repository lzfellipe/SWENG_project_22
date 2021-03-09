import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

function FreelancerHeader() {
    return (
        <div className="freelancer_header">
            <h1>Our Freelancers</h1>
            <p>Browse our client base of certified freelancers.</p>

            <Form>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </div>
    )
}

export default FreelancerHeader;