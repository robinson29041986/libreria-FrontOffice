import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import '../assets/index.css'

const ProductDetails = (props) => {
  const [productData, setProductData] = useState({});
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const getResponse = async () => {
    const response = await fetch(`http://localhost:5000/products/${props.productId}`)
      .then(response => response.json());
    setProductData(await response)
    console.log(response)
  };

  var productImage = `http://localhost:5000/public/uploads/${productData.image}`


  useEffect(() => {
    getResponse();
  }, []);


  return (
    <Container className="py-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
          <Lightbox
            images={[
              {
                src: productImage,
              },
            ]}
          />
        </Col>
        <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`} style={{ opacity: '0.8', fontWeight: '400' }}>
          <h1>{productData.name}</h1>
          <br />
          <p className="mt-3 h5" style={{ opacity: '0.8', fontWeight: '400' }}>
            {productData.description}
          </p>
          <br />
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`} style={{ opacity: '0.8', fontWeight: '400' }}>
            <h4>Categoria: {productData.category_id}</h4>
          </b>
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`} style={{ opacity: '0.8', fontWeight: '400' }}>
            <h4>Autor: {productData.autor}</h4>
          </b>
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`} style={{ opacity: '0.8', fontWeight: '400' }}>
            <h4>Isbn: {productData.isbn}</h4>
          </b>
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`} style={{ opacity: '0.8', fontWeight: '400' }}>
            Precio: {parseInt(productData.price).toLocaleString('es-CO',
              {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
              })}
          </b>
          <br />
          <Button
            onClick={() => addItem(productData)}
            className={theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}
            style={{ borderRadius: '8px', border: '2', color: 'white' }}
          >
            <BsCartPlus size="1.8rem" />
            Agregar al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;