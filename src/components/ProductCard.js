import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { BiX } from 'react-icons/bi'
import { Link } from "@reach/router";
import '../assets/index.css'

const ProductCard = (props) => {
  let { image, price, name, id } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  }
  return (
    <Card
      style={{ width: '18rem', height: 'auto' }}
      className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Link to={`/product-details/${id}`}>
        <div style={{
          background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
          justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
        }}>
          <div style={{ width: '10.5rem' }}>
            <Card.Img variant="top" src={`http://localhost:5000/public/uploads/${image}`} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {name}
        </Card.Title>
        <Card.Title>
          COP. <span className="h3">{parseInt(price).toLocaleString('es-CO',
            {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0
            })}</span>
        </Card.Title>
        <Button
          onClick={() => addToCart()}
          className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex align-item-center m-auto border-0`}>
          <BsCartPlus size="1.8rem" />
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;