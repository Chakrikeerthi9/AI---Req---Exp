import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-sky-100 rounded-lg px-4 shadow-lg border-1 border-sky-200 mb-4 fixed">
        <nav className='flex justify-end items-center gap-6 p-4 bg-gradient-to-b from-white-100 to-white-700'>
            <h1 className='text-4xl font-bold px-5 py-3 rounded-full text-black bg-gradient-to-r from-red-200 to-blue-200 mr-auto'>Pyramyd</h1>
            <a href="https://www.pyramyd.ai/" className='hover:text-blue-500'>Contact Us</a>
            <button className='hover:text-blue-500 cursor-pointer'>Log-In</button>
            <button className='hover:text-blue-500 cursor-pointer'>Sign-In</button>
            <h3>MemberShip status : <span>Inactive</span></h3>
        </nav>
    </header>
  )
}

export default Header