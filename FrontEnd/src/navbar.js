import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNavbar() {
  return (  

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            GraphQL with Spring
          </Navbar.Brand>
           <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            Powered by: {' '}
             React Bootstrap
             <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/rb-logo.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            GraphQL
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/graphql-logo.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            {' '}
            Spring Boot
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/Spring Boot logo.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
          </Navbar.Text>
        </Navbar.Collapse>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Back-End by : <a target='_blank' href="https://www.linkedin.com/learning/spring-with-graphql">Frank P Moley III</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default HeaderNavbar;