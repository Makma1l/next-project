import React from 'react'

export default async function page({params}) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
  return (
    <div>
        <h1   className='mb-3'>Product id:{params.id}</h1>
        <h2 > Name: {product && product.title}</h2>
        <h2> Description: {product && product.description}</h2>
        <h2> Price: {product && product.price}</h2>
        <h2>{product && product.image}</h2>
    </div>
  )
}
