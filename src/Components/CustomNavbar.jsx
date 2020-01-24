import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CustomNavbar extends Component {
    render() {
        return (
            // <Navbar defaulf collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <Link to="/">CodeLife</Link>
            //         </Navbar.Brand>
            //         <Navbar.Toggle/>
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} componentClass={Link} to="/">
            //                 Home
            //             </NavItem>
            //             <NavItem eventKey={2} componentClass={Link} to="/about">
            //                 About
            //             </NavItem>
            //             <NavItem eventKey={3} componentClass={Link} to="/news">
            //                 News
            //             </NavItem>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="primary" text="white" variant="dark"  className="mb-3">
            <Container>
            <Navbar.Brand>
                <Link className="text-white" to="/">CodeLife</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>

                <Nav>
                <Nav.Link className="pr-3"> 
                    <Link className="text-white" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link className="pr-3" eventKey={2}> 
                    <Link className="text-white" to="/about">About</Link> 
                </Nav.Link>
                <Nav.Link className="pr-3" eventKey={3}> 
                    <Link className="text-white" to="/news">News</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}