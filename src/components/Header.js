import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import Logo from '../assets/logo.png';
import '../assets/index.css'


const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  });

  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"
      variant={darkMode ? 'dark' : 'light'}
      className={darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100 }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
            <img src={Logo} alt="Logo" className="header_logo"></img>
            <b>Anhelo del Saber</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="sign-in" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              Iniciar Sesion
            </Link>
            <Link
              to="/cart"
              className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}
            >
              <BiCart size="2rem" />
              {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
              <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Carrito</span>
            </Link>
            <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              <VscAccount size="1.8rem" />
              &nbsp;Mi Cuenta
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;