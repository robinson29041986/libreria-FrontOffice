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


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const birthday = form.birthday.value;
    const password = form.password.value;
    const firstname = form.firstName.value;
    const lastname = form.lastName.value;
    const email = form.email.value;
    const cellphone = form.cellphone.value;

    if (birthday && password && firstname && lastname && email && cellphone) {
      setLoading(true);
      console.log('call api here');
      console.log(birthday, password, firstname, lastname, email, cellphone);
    }
  }
  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
          <h1 className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
            <img src={Logo} alt="Logo" className="header_logo"></img>
            Crear Cuenta
          </h1>
          <InputGroup>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Cedula</Form.Label>
                  <Form.Control name="id_number" type="text" placeholder="Id Number" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control name="first_Name" type="text" placeholder="Nombres" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control name="last_Name" type="text" placeholder="Apellidos" required />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Correo Electronico" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Cumpleaños</Form.Label>
                <Form.Control name="birthday" type="text" placeholder="Cumpleaños" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numero Celular</Form.Label>
                <PhoneInput
                  country={'in'}
                  value={number}
                  onChange={phone => setNumber(phone)}
                  className="text-dark"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" /* minLength={6} */ required />
              </Form.Group>
              <Button
                type="submit"
                className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                disabled={loading}
                style={{ border: 0 }}
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