import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeCart({id, name, image, price, category,itemsHome}) {
    const navigate=useNavigate()
    const handleAddToCart=(e)=>{
      e.stopPropagation()
      navigate(`/cart/${id}`, { state: itemsHome[id] })
    }
  return (
    <div
      onClick={()=>navigate(`/courseDetail/${id}/${name.replaceAll('/',' ','-')}`,{state:itemsHome[id]})}
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col cursor-pointer">
      <div className='relative group'>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"/>
        <span className='absolute hidden group-hover:block bg-gray-800 text-white text-xs font-bold p-1 rounded whitespace-nowrap ml-2 bottom-0 transform -translate-y-1/2'>
         go to Detail
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
          <span className="block text-sm text-gray-500 mt-1">{category}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold">${price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200 z-3 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
