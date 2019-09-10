import React, { Component } from 'react';
import style from 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';


class NavBar extends Component {
	render() {
		return (
			<>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Chef Tyy</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </>
		)
	}
}

export default NavBar;
