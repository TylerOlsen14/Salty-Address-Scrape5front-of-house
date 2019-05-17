import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from  'reactstrap';
import logo from '../assets/logo.jpg'

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <img src={logo} alt="" className="mr-5" />
              <NavbarBrand href="/">
                Scraped address
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/TylerOlsen14">
                      Github
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      )
  }
}


export default AppNavbar