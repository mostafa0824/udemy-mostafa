import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { FaTrashCan } from "react-icons/fa6";
import { AuthContext } from '../../Context/AuthContext';

export default function Cart() {
  const {id}=useParams()
  const location = useLocation();
  const course = location.state;
  const navigate=useNavigate();
  const {token}=useContext(AuthContext)
  const [cartItems, setCartItems] = useState([]);

  // save course
  useEffect(()=>{
    const getData=localStorage.getItem('cart')
    let savedCart=getData ? JSON.parse(getData) :[]
    if(course){
      const exists=savedCart.some(item=>item.id===course.id)
    if(!exists){
     savedCart =[...savedCart,{...course,quantity:1}]
    }
  }
  setCartItems(savedCart)
  localStorage.setItem('cart',JSON.stringify(savedCart))
  },[course])

  // Remove the product
  const removeItem=(id)=>{
    const updatedCart=cartItems?.filter(item=>item.id !==id)
    setCartItems(updatedCart)
    if(updatedCart.length===0){
      localStorage.removeItem('cart')
      navigate('/')
    }else{
      localStorage.setItem('cart',JSON.stringify(updatedCart))
    }
  }

  // Product increase
  const increase=(id)=>{
    const updatedCart=cartItems?.map(item=>
      item.id===id ? {...item , quantity:item.quantity +1}:item
    )
    setCartItems(updatedCart)
    localStorage.setItem(JSON.stringify(updatedCart))
  }
  // Product reduction
   const reduction=(id)=>{
    const updatedCart=cartItems?.map(item=>
      item.id===id && item.quantity >1 ?{...item,quantity:item.quantity -1}:item
    )
    setCartItems(updatedCart)
    localStorage.setItem(JSON.stringify(updatedCart))
   }

  // total price
  const subtotal = cartItems.reduce((sum, item) => sum + (item['actual_price_usd'] * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) =>
    sum + (item['original_price_usd ']? (item['original_price_usd'] - item['actual_price_usd']) * item.quantity : 0), 0);
  const total = subtotal - discount;
 if(!cartItems) return <Loading/>
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
        <p className="text-gray-600">{cartItems.length} {cartItems.length > 1 ? "courses" : "course"} in cart</p>
      </div>
<div className="space-y-6">
   {cartItems?.map((item,index)=>(
          <div key={item.id} className="flex flex-col md:flex-row border-b pb-6">
            <div className="relative group md:w-1/4 mb-4 md:mb-0">
            <div>
              <img
                 onClick={()=>navigate(`/courseDetail/${item.id}/${item.name.replaceAll('/',' ','-')}`,{ state:item })}
                src={item?.image} 
                alt={item?.name}
                className="w-full h-40 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80"
              />
              <span className='absolute hidden group-hover:block bg-gray-800 text-white text-xs p-1 rounded whitespace-nowrap left-full ml-2 bottom-0 transform -translate-y-1/2'>
              Go to details</span>
              </div>
            </div>
            <div className="md:w-2/4 md:pl-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item?.name}</h2>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {item?.category}
              </span>
              <FaTrashCan onClick={()=>removeItem(item.id)} className='hover:text-red-600 cursor-pointer mt-5 text-[25px]'/>
            </div>
            <div className='flex flex-col gap-5'>
              <div className="md:w-1/4 mt-4 md:mt-0 md:text-right">
              <span className="text-lg font-bold text-purple-600">
                ${item['actual_price_usd']}
              </span>
            </div>
            <div className='flex items-center gap-5'>
              <button onClick={()=>increase(item.id)} className='w-10 h-10 bg-gray-400 rounded cursor-pointer hover:bg-gray-300'>+</button>
              <span>{item.quantity}</span>
              <button disabled={item.quantity===1} onClick={()=>reduction(item.id)} className='w-10 h-10 bg-gray-400 rounded cursor-pointer hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-no-drop'>-</button>
            </div>
            </div>
            
          </div>
   ))}
   </div>
        {/* Order Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-green-600">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-3">
          <span>Total</span>
          <span className="text-xl text-purple-600">${total.toFixed(2)}</span>
        </div>
        <div className='m-[25px] flex items-center justify-center'>
          <button onClick={()=>token?navigate('/checkout',{state:cartItems}):navigate('/login')} className='px-5 py-3 bg-purple-700 hover:bg-purple-500 rounded-lg text-white cursor-pointer'>Confirm and complete the order</button>
        </div>
      </div>
    </div>
  );
}
