import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

function App() {
  return (
    <div className="App blue-background">
      {/* <Navbar bg="dark" variant="dark" className="navbar" expand="lg"> */}
      <Navbar variant="dark" className="navbar" expand="lg">
        <Navbar.Brand href="/">Fisconnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={window.location.pathname}>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/freelancers">
              <Nav.Link>Freelancers</Nav.Link>
            </LinkContainer>
            <Nav.Link>About Us</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="link-1">Sign in</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
