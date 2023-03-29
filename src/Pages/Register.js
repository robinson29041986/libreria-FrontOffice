import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import Logo from '../assets/logo.png';


const Register = () => {

  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(null);
  const [theme] = useThemeHook();

  const handleSubmit = (e) => {

    const form = e.currentTarget;

    e.preventDefault();
    const card = form.card.value;
    const name = form.name.value;
    const email = form.email.value;
    const birthday = form.birthday.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const password = form.password.value;

    if (card && name && email && birthday && phone && address && password) {
      setLoading(true);
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          card: card,
          name: name,
          email: email,
          birthday: birthday,
          phone: phone,
          address: address,
          password: password
        })
      })
    }
  }
  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
          <h1 style={{ display: 'flex' }} className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
            <img src={Logo} alt="Logo" className="header_logo"></img>
            Crear Cuenta
          </h1>
          <InputGroup>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Cedula</Form.Label>
                  <Form.Control style={{ width: '220%' }} name="card" type="text" placeholder="Cedula" required />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Nombres</Form.Label>
                <Form.Control style={{ width: '200%' }} name="name" type="text" placeholder="Nombres" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Correo Electronico" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Cumpleaños</Form.Label>
                <Form.Control style={{ width: '200%' }} name="birthday" type="text" placeholder="Cumpleaños" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numero Celular</Form.Label>
                <PhoneInput
                  country={'in'}
                  value={number}
                  onChange={phone => setNumber(phone)}
                  className="text-dark"
                />
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control style={{ width: '200%' }} name="address" type="text" placeholder="Direccion" required />
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control style={{ width: '100%' }} name="password" type="password" placeholder="Password" /* minLength={6} */ required />
              </Form.Group>
              <Button
                type="submit"
                className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                disabled={loading}
                style={{ border: 1, width: '240px' }}
              >
                {loading ?
                  <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    &nbsp;Loading...
                  </> : 'Crear Cuenta'
                }
              </Button>
            </Form>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;