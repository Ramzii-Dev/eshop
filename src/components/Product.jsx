import React from 'react'
import "../style/product.css"
import {useStateValue} from '../provider/StateProvider'

function Product(props) {
  const [{cards}, dispatch] = useStateValue();
  const addToCard = () => {
    dispatch({
      type: 'ADD_CARD',
      item:{
        id: props.id,
        title: props.title,
        price: props.price,
        picture: props.picture,
      }
 
    })
  };
  return (
    <div className="product row img-thumbnail">
      <div className="product_img">
        <img src={props.picture} 
          className="img-fluid img-thumbnail m-2" alt="Responsive image"  />
      </div>
      <div className="product-info">
        <div className="one">
        <p>{props.title}</p>
        <p className='product_price'>{props.price}</p>
        </div>
        <div className="two">
        <div className="product_rating">{Array(props.rating).fill().map((_,i) =>
   
            (<span key={i} >⭐</span>)
      )}
        </div>
        <button className="btn btn-success" onClick={addToCard}> add to card</button>
        </div>
      
      </div>
    </div>
  )
}

export default Product