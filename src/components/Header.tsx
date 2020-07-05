import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Header: React.FC<any> = (props: any) => {
  const handleClick = () => {
    props.startNewGame();
  };
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Navbar.Brand>Score Keeper</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav variant="pills">
          <Nav.Item>
            <Button onClick={handleClick}>Start a Game</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
