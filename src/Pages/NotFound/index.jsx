import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <img className='w-[400px] h-[400px]' src="/assets/image/error-desktop-2x-v1.webp" alt="" />
      <h2 className='text-[32px] font-bold'>We can’t find the page you’re looking for</h2>
      <p className='font-bold'>Visit our <Link to={'/'} className='text-purple-700 hover:text-purple-500'>Home page</Link> for further assistance.</p>
    </div>
  )
}
