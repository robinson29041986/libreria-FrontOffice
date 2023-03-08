import React from 'react';
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Heading from '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import '../assets/index.css';
import OrderCard from '../components/OrderCard';


const MyAccount = () => {
  const [theme] = useThemeHook();
  return (
    <Container className="py-5 mt-5">
      <Heading heading="Mi Cuenta" />
      <Tab.Container defaultActiveKey="my-orders">
        <Row className="justify-content-evenly mt-4 p-1">
          <Col sm={3} className={`${theme ? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded h-100 mb-3 user-menu`}>
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image
                  src={profilePix}
                  thumbnail
                  fluid
                  roundedCircle
                  className="p-0"
                />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hola,</span>
                <h4>Robinson</h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey="my-orders">
                  Mis Pedidos
                  <FaClipboardList size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="account-details">
                  Detalles de mi Cuenta
                  <FaUser size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="address">
                  Mi Direccion de Envio
                  <IoLocationSharp size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="wallet">
                  Mis Metodos de Pago
                  <GiWallet size="1.4rem" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} className={`${theme ? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded`}>
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <Heading heading="Mis Pedidos" size="h3" />
                <OrderCard
                  orderDate=""
                  orderId=""
                  title=""
                  img=""
                  deliveredDate=""
                />
                <OrderCard
                  orderDate=""
                  orderId=""
                  title=""
                  img=""
                  deliveredDate=""
                />
              </Tab.Pane>
              <Tab.Pane eventKey="account-details">
                <Heading heading="Detalles de mi Cuenta" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="address">
                <Heading heading="Mi Direccion de Envio" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="wallet">
                <Heading heading="Mis Metodos de Pago" size="h3" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyAccount;