import React from 'react'
import type { Product } from '../../types/product'

const ProductCard =({ title, price, image, rating }:Product)=> {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">₹{price}</p>
      <p className="text-sm text-yellow-600">⭐ {rating}</p>

      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard