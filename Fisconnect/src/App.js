import './App.css';

import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="/">Fisconnect</Navbar.Brand>
        <Nav className="mr-auto" activeKey={window.location.pathname}>
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/freelancers">
           <Nav.Link>Freelancers</Nav.Link>
          </LinkContainer>
          <Nav.Link>About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
         </Form>
       </Navbar>
       <Routes></Routes>
    </div>
  );
}

export default App;
