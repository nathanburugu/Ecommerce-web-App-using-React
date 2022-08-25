import React from 'react'
import {Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product}) => {
  return (
    // the whole products starts here
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>
        {/* the product name starts here */}
        <Card.Body>
            <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>

         {/* the review sectionstarts here */}
        <Card.Text as='div'>
            {/* <div className='my-3'>
                {product.rating} from {product.numReviews} reviews
            </div> */}
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>
        {/* the price section starts here */}
        <Card.Text as='h3'>
            ${product.price}
        </Card.Text>


        </Card.Body>


        {/* the product name ends here */}

      
    </Card>
  )
}

export default Product
