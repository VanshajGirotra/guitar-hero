/*
    NAVBAR
*/
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import propTypes from 'prop-types';

const Navbar = ({ tab, callback }) => (
    <Nav variant="pills" defaultActiveKey={tab} onSelect={(e) => callback(e)}>
        <Nav.Item>
            <Nav.Link eventKey="1">
                <h2>test</h2>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2">
                <h2>test 2</h2>
            </Nav.Link>
        </Nav.Item>
    </Nav>
);
Navbar.propTypes = {
    tab: propTypes.object,
    callback: propTypes.func,
};
export default Navbar;
