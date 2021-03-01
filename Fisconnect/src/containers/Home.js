import './Home.css';

import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function App() {
  return (
    <div className="Home">
        <Container fluid className="homepageWelcome" style={{ backgroundImage: "url(/images/Homepage2.png)"}} id="background_img">
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
