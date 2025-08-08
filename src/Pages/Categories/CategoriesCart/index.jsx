import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoriesCart({id, name, image, price, category ,prodocts}) {
  const navigate = useNavigate();
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate(`/cart/${id}`, { state: prodocts[id]})
  };
  
  return (
    <div 
      onClick={() => navigate(`/courseDetail/${id}/${name.replaceAll('/',' ','-')}`,{state:prodocts[id]})}
      className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative group overflow-hidden">
        <img
          src={image}
          alt={name || "Course image"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className='absolute hidden group-hover:block bg-gray-800 text-white text-xs p-1 rounded whitespace-nowrap ml-2 bottom-10 transform -translate-y-1/2'>
          Go to details</span>
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          HOT
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[56px]">
              {name}
            </h3>
          </div>

          <p className="text-sm text-gray-600 mb-1">Udemy Instructor</p>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-purple-700">
            ${price}
          </span>
          <div className="flex items-center">
            <span className="text-orange-400 mr-1">★</span>
            <span className="text-gray-700 text-sm font-bold">4.8</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}