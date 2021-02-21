import './App.css';

import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar bg="dark" variant="dark" className="navbar">
          <Navbar.Brand href="#home">Fisconnect</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#freelancers">Freelancers</Nav.Link>
            <Nav.Link href="#about_us">About Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>

        <Container fluid className="homepageWelcome" style={{ backgroundImage: "url(/Homepage.png)", height: '750px' }}>
          <Row>
            <Col>
              <h1>FÍSCONNECT</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>WE CONNECT BUSINESSES TO FREELANCE VIDEOGRAPHERS & PHOTOGRAPHERS</h3>
            </Col>
          </Row>
        </Container>

    </div>

  );
}

export default App;
