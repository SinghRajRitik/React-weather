import React from 'react'
import logo from '../assets/main-logo.svg'
import { useState } from 'react';

const NavBar = ({ onTextChange }) => {

    const [inputValue, setInputValue] = useState('');
    
     const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onTextChange?.(inputValue.trim()); 
      setInputValue(''); 
    }
  };
    
    return (
        <>
            <div className='w-100 h-14 bg-pink-500 flex justify-between items-center'>
                <div className='flex gap-3' >
                    <img src={logo} alt="Logo" className='h-12'/>
                    <a href= "#" className='font-dancing font-bold text-3xl  text-blue-600 '>weatherApp </a>
                    <a href="#" className='w-fit h-fit py-2 font-poppins hover:text-white'>Home</a>
                    <a href= "#" className='w-fit h-fit py-2 font-poppins hover:text-white'>AboutApp</a>
                    <a href="#"className='w-fit h-fit py-2 font-poppins hover:text-white'>Guide</a>
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} className='border-2 border-blue-500 rounded-md p-1 m-1' />
                        <button type='submit' className='p-1 m-1 border-2 bg-green-200 border-green-500 rounded-md hover:bg-green-600'>Search
                        </button>
                    </form>
                </div>
            </div></>
    )
}

export default NavBar