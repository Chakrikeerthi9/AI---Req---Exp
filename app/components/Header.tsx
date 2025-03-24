import React from 'react'

const Header = () => {
  return (
    <header className="w-[100%] bg-sky-100 rounded-lg px-4 shadow-lg border-1 border-sky-200 mb-4 fixed">
        <nav className='flex justify-end items-center gap-6 p-4 bg-gradient-to-b from-white-100 to-white-700'>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-drmTRP513F1ckyU3cudzZ1GR7nNJFt.png" alt='Pyramyd' className='h-[35px] w-[155px] mr-auto'/>
            <a href="https://www.pyramyd.ai/" className='hover:text-blue-500'>Contact Us</a>
            <button className='hover:text-blue-500 cursor-pointer'>Log-In</button>
            <button className='hover:text-blue-500 cursor-pointer'>Sign-In</button>
            <h3>MemberShip status : <span>Inactive</span></h3>
        </nav>
    </header>
  )
}

export default Header