import Link from 'next/link'
import React from 'react'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className='bg-gray-800 w-full h-[150px]'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        <span className='text-blue-600'>Plus</span>
                        <span className='text-white'>Bot</span>
                    </h1>
                </div>
                <ul className='text-center text-gray-200'>
                    <li className='font-semibold'>Sayfalar</li>
                    <Link href={'/'}>
                        <li className='font-thin hover:underline text-blue-500'>Home</li>
                    </Link>
                    <Link href={'/Commands'}>
                        <li className='font-thin hover:underline text-blue-500'>Commands</li>
                    </Link>
                </ul>
                <ul className='text-center text-gray-200'>
                    <li className='font-semibold'>Önemli</li>
                    <Link href={'/'}>
                        <li className='font-thin hover:underline text-blue-500'>Privacy Policy</li>
                    </Link>
                    <Link href={'/'}>
                        <li className='font-thin hover:underline text-blue-500'>Add a Bot</li>
                    </Link>
                    <Link href={'/'}>
                        <li className='font-thin hover:underline text-blue-500'>Sponsor</li>
                    </Link>
                    <Link href={'/'}>
                        <li className='font-thin hover:underline text-blue-500'>Vote</li>
                    </Link>
                </ul>
                <div className='flex flex-col text-center gap-y-1'>
                    <span className='text-gray-400 font-medium'>Tasarımcısı ve Geliştiricisi</span>
                    <a href='https://github.com/SametYurtoglu' target={'_blank'} className='text-gray-200 uppercase font-bold underline'>NotFounds</a>
                    <div className='flex justify-center gap-x-1'>
                        <a href="#" className='hover:bg-white text-pink-600 text-xl p-1 rounded-full'><AiOutlineInstagram /></a>
                        <a href="#" className='hover:bg-white text-red-600 text-xl p-1 rounded-full'><AiFillYoutube /></a>
                        <a href="#" className='hover:bg-white text-sky-600 text-xl p-1 rounded-full'><AiOutlineTwitter /></a>
                        <a href="#" className='hover:bg-white text-blue-600 text-xl p-1 rounded-full'><FiLinkedin /></a>
                        <a href="#" className='hover:bg-white text-cyan-600 text-xl p-1 rounded-full'><FaDiscord /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer