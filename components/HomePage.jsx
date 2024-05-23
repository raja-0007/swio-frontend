import React from 'react'
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { IoLogoApple } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";




function HomePage({setActive}) {
  return (
    <div className='flex w-full flex-col gap-6 items-center relative '>
      <div className='absolute top-0 right-10 flex items-center gap-5 font-bold'>
        <button type='button' className='hover:text-yellow-500' onClick={()=>setActive('payment')}>payment</button>
        <button type='button' className='hover:text-yellow-500' onClick={()=>setActive('transactions')}>transactions</button>
      </div>
      <span className='font-bold text-8xl relative'>Sleeve <span className='font-extralight'>2</span>
        <div className='absolute bottom-0 bg-gradient-to-b from-transparent to-white py-3 w-full'></div>
      </span>
      <span className='font-bold text-5xl '>The ultimate music accessory for your Mac.</span>
      <div className='w-full text-center  text-2xl text-gray-700'>
        <p>Sleeve sits on the desktop, displaying and controlling the music you’re</p>
        <p className='flex items-center justify-center'>currently playing in <SiApplemusic className='text-red-400 mx-1' /> Apple Music, <FaSpotify className='text-green-400 mx-1' /> Spotify, and <span className='p-[1px] bg-violet-500 mx-1 rounded-md text-white'><IoMdMusicalNote /></span> Doppler.</p>
      </div>
      <div className='mx-auto  flex items-center justify-center gap-6 mt-5'>
        <button type='button' className='p-3 px-5 text-lg font-bold bg-black hover:bg-gray-800 capitalize text-white rounded-xl flex items-center gap-2'><IoLogoApple size={'1.3em'} />mac app store</button>
        <button className='p-3 px-5 text-lg font-medium capitalize flex items-center bg-slate-50 hover:bg-white gap-2 border rounded-xl border-gray-200'>buy directly <span className='bg-black text-white text-sm p-1 px-2 rounded-full'>$5.99</span></button>
      </div>
      <span className='text-center w-60 text-sm text-gray-400'>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</span>
      <div
        className='flex items-center justify-center border cursor-pointer border-gray-300 bg-slate-50 hover:bg-white mt-8 px-3 py-2 ps-16 rounded-full  relative'>
        <img src="/shelfCallout.png" className='absolute left-0 ' alt="" />
        <span className='text-gray-500'>
          Now with <span className='font-semibold text-gray-700'>shelves and a progress bar.</span> See what's new in Sleeve 2.3

        </span>
        <span className=' border-2 border-gray-400 text-gray-400 ms-2 p-1 text-[.6em] rounded-full '><FaArrowRight /></span>
      </div>
    </div>
  )
}

export default HomePage
