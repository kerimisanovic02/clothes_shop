import React, {useState} from 'react'
import './Products.scss'

const ProductCard = (props) => {
    const {title , desc , price ,image ,setProductToCart ,product ,handleModal} = props;
    const restrutureImage = (image)=>{
        return( image ? image.split(','):"")[0]
    }
  return (
      <div className="card">
          <img src={restrutureImage(image)} alt="Product image" 
          onClick={() => handleModal(product)}/>
              <h4 className="card-title">{title}</h4>
              <p className="price">Cijena: {price}BAM</p>
              <p>{desc}</p>

        
              <p>
                <button className='button' 
                onClick={() => setProductToCart(product)}
              >Dodaj u kropu</button>
              </p>
      </div>
  )
}

export default ProductCard