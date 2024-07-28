import Link from 'next/link';
import React from 'react'

export default async function page() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
  return (
    <div>
        <h2>Products page</h2>
        <ul>
          {products.map(p => <li key={p.id}>
                <Link href={`/products/${p.id}`} className="color-red">{p.title}</Link>
            </li>)}
        </ul>
    </div>
  )
}
