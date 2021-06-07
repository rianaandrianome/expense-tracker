import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Container, Button, Modal,
} from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Expense Tracker
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav>
            <Button variant="secondary" onClick={handleShow} className="nav-link">
              User Guide
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>How to use the tracker?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="font-weight-bold text-uppercase">
                  Add an expense
                </p>
                <p>Click on the Add Expense button to add data.</p>

                <p className="font-weight-bold text-uppercase">
                  Viewing
                </p>
                <ul>
                  <li>
                    The 2 graphs give a vizualization of how much money was spent on the different categories.
                  </li>
                  <li>
                    The table below the 2 graphs give a detailed list of the expenditures.
                  </li>
                </ul>

                <p className="font-weight-bold text-uppercase">
                  Filtering
                </p>
                <p>Choose one of the period to filter your data.</p>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
