"use client"
import React from 'react';



import Link from 'next/link';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { AiFillBulb ,AiOutlineCluster,AiFillWindows, AiOutlineAudit } from "react-icons/ai";


export default function NavApp() {
  return (
    <nav className="flex flex-col items-center pl-1 pr-1 pt-2 h-[500px] shadow-lg w-[100px] text-sm bg-white">
      <Link href="/" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <FaHome size="25px"/> Home
        </div>
        
      </Link>
      <Link href="/knowus" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <AiFillBulb size="25px" /> Know Us
        </div>
        
      </Link>
      <Link href="/brands" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <FaHome size="25px"/> Brands
        </div>
        
      </Link>
      <Link href="/distributors" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <AiOutlineCluster size="25px"/> Distributors
        </div>
        
      </Link>
      <Link href="/retailer" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <FaHome  size="25px"/> Retailer
        </div>
        
      </Link>
      <Link href="/ourapp" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <AiFillWindows size="25px" /> Our Apps
        </div>
        
      </Link>
      <Link href="/" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          < AiOutlineAudit size="25px"/> Advertisers
        </div>
        
      </Link>
      <Link href="/" className='flex flex-col items-center mb-3'>
        
        <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-500">
          <FaHome size="25px"/> Partners
        </div>
        
      </Link>
      
      
    </nav>
  );
}
