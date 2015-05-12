'use strict';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';
import { RouteHandler } from 'react-router';

class AppRoot extends React.Component {

  renderNavbar() {
    return (
      <Navbar brand="Martexas" inverse fixedTop toggleNavkey={0}>
        <Nav>
          <NavItemLink to="Setup">Setup Game</NavItemLink>
        </Nav>
      </Navbar>
    );
  }

  render() {
    return (
      <div>
        {this.renderNavbar()}
        <RouteHandler/>
      </div>
    );
  }
}

export default AppRoot;
