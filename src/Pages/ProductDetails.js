import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import '../assets/index.css'

const ProductDetails = (props) => {
  const [productData, setProductData] = useState([]);
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const res = await fetch(`http://localhost:5000/products/${props.productId}`)
      .then(res => res.json());
    setProductData(await res);
  }
  return (
    <Container className="py-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
          <Lightbox
            images={[
              {
                src: productData.image,
              },
            ]}
          />
        </Col>
        <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
          <h1>{productData.name}</h1>
          <Button
            onClick={() => addItem(productData)}
            className={theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}
            style={{ borderRadius: '8px', border: '2', color: 'black' }}
          >
            <BsCartPlus size="1.8rem" />
            Agregar al Carrito
          </Button>
          <br />
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
            COP. {productData.price}
          </b>
          <br />
          <p className="mt-3 h5" style={{ opacity: '0.8', fontWeight: '400' }}>
            {productData.description}
          </p>
          <br />
          <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
            {productData.category}
          </b>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;