//for now i just copied the home page for testing

import './Home.css';

import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function App() {
  return (
    <div className="Home">
      <Container fluid className="homepageWelcome" style={{ backgroundImage: "url(/images/Homepage2.jpg)"}} id="background_img">
        <h1>TEST</h1>
        <h3>TEST</h3>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </div>

  );
}

export default App;
