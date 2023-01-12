import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='text-center space-y-4 py-20 bg-hero'>
            <h3 className='text-3xl font-extrabold text-red-500 pb-8'>SD Metal</h3>
            <ul className='flex justify-center space-x-6 text-white'>
                <li><a href="" className='text-3xl hover:text-red-500 transition-all duration-300'><AiFillFacebook/></a></li>
                <li><a href="" className='text-3xl hover:text-red-500 transition-all duration-300'><AiOutlineInstagram/></a></li>
                <li><a href="" className='text-3xl hover:text-red-500 transition-all duration-300'><AiFillTwitterCircle/></a></li>
                <li><a href="" className='text-3xl hover:text-red-500 transition-all duration-300'><AiFillYoutube/></a></li>
                <li><a href="" className='text-3xl hover:text-red-500 transition-all duration-300'><BsPinterest/></a></li>
            </ul>
            <hr className='w-[40%] mx-auto'/>
            <p className="text-white">
            &copy;Copyright {new Date().getFullYear()}. All Rights Reserved SD METAL
          </p>
          <div>
            <a href="" className='text-white'>Privacy policy</a>
            <span className='mx-5 text-white'>|</span>
            <a href="" className='text-white'>Cookie policy</a>
          </div>
    </footer>
  )
}

export default Footer