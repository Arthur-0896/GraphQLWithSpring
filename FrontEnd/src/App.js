import './App.css';
import HeaderNavbar from './navbar';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import DropdownHierarchy from './customersTree';

function App() {
    const [show, setShow] = useState(true);

  return (
    <div>
      <HeaderNavbar />
      <br />
      <Container>
      <Alert variant="info"  style={{textAlign: "center"}}>
        
          Go Ahead! Select any customer to lazily load more details about their orders.
        
      </Alert>
      </Container>
      <DropdownHierarchy />
    </div>
  );
}


export default App;
