import React from 'react'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-gray-800 w-full h-[150px]'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            <div>
                <h1 className='text-blue-600 font-bold text-4xl'>PlusBot</h1>
            </div>
            <div className='flex flex-col text-center gap-y-1'>
                <span className='text-gray-400 font-medium'>Tasarımcısı ve geliştiricisi</span>
                <h1 className='text-gray-200 uppercase font-bold underline'>Developer Team</h1>
                <div className='flex justify-center gap-x-1'>
                    <a href="#" className='hover:bg-white text-pink-600 text-xl p-1 rounded-full'><AiOutlineInstagram/></a>
                    <a href="#" className='hover:bg-white text-red-600 text-xl p-1 rounded-full'><AiFillYoutube/></a>
                    <a href="#" className='hover:bg-white text-sky-600 text-xl p-1 rounded-full'><AiOutlineTwitter/></a>
                    <a href="#" className='hover:bg-white text-blue-600 text-xl p-1 rounded-full'><FiLinkedin/></a>
                    <a href="#" className='hover:bg-white text-cyan-600 text-xl p-1 rounded-full'><FaDiscord/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer