import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
      <div>
      <Navbar bg="primary" variant="dark">
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

      <div>
      <h1>
        FISCONNECT!
      </h1>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      </div>
    </div>

  );
}

export default App;
