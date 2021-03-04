import './Home.css';

import'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function App() {
  return (
    <div className="Home">
      <Container fluid className="homepageWelcome" style={{ backgroundImage: "url(/images/Homepage2.jpg)"}} id="background_img">
        <h1>Fisconnect</h1>
        <h3>Search for your next genius</h3>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </div>

  );
}

export default App;
