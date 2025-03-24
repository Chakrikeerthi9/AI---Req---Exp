import React from 'react'
import { Facebook,Twitter,Linkedin,Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-sky-300 h-50 rounded-md items-center text-center mt-25'>
      <div className='grid grid-cols-2 h-40 w-180 mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <p className="text-md my-1">Stay updated with AI innovations!</p>
          <input type='email' placeholder='Enter your email' className='border-2 border-gray-500 rounded-md px-2 py-1 mr-2 my-1' />
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-54 mr-2 my-1">Subscribe</button>
        </div>
    

        <div className='flex flex-col justify-center'>
          <p className='text-md mb-2'>Follow Us</p>
          <div className='flex flex-row justify-center items-center mb-15'>
            <a href='#' className='mx-1'><Facebook className='rounded-full h-7 w-7 bg-black text-sky-300 hover:text-white' /></a>
            <a href='#' className='mx-1'><Twitter className='rounded-full h-7 w-7 bg-black text-sky-300 hover:text-white' /></a>
            <a href='#' className='mx-1'><Linkedin className='rounded-full h-7 w-7 bg-black text-sky-300 hover:text-white' /></a>
            <a href='#' className='mx-1'><Instagram className='rounded-full h-7 w-7 bg-black text-sky-300 hover:text-white' /></a>
          </div>
        </div>
      </div>
      <hr className='w-[80%] mx-auto border-1 border-gray-500 mb-1'></hr>
      <p>© CopyRight {new Date().getFullYear()}, Powered by Pyrmyd</p>
    </div>
  )
}

export default Footer