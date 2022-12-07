import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import "./Cart.scss"

const Cart = () => {
  const [cartItems, setcartItems] = useState([])

 useEffect(() => {
   getProducts();
 
 }, [])
 
 const getProducts = ()=>{
  if(localStorage.getItem('products')){
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    setcartItems(products)
  }
 }

 const clearCart= ()=>{
   localStorage.removeItem('products');
   setcartItems([]);
   alert('Korpa je očišćena');
 }
  const buyItems = () => {
    localStorage.removeItem('products');
    alert('Uspješno kupljeni artikli');
    setcartItems([]);
  }

 console.log(cartItems);
  return (
    <div className='container mt-5'>
      <h3>Korpa</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ime proizvoda.</th>
            <th>Cijena.</th>
            <th>Slika</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price} BAM</td>
                <td><img src={item.images} alt="image" /></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" type="submit" onClick={()=>{buyItems()}}  >
          Kupi.
        </Button>
        <Button variant="warning" type="submit" className="ms-5" onClick={() => { clearCart() }}>
          Ocisti karticu.
        </Button>
      </div>
    </div>
  )
}

export default Cart