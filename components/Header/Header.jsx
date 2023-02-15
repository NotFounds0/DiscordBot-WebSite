import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillCloseSquare, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const router = useRouter()
    const [nav, setnav] = useState(false)
    return (
        <div className='container mx-auto '>
            <div className="flex justify-between items-center h-[6rem] w-full">
                <div className="flex gap-10 items-center">
                    <h1 className='text-3xl font-bold'>
                        <span className='text-blue-600'>Plus</span>
                        <span className='text-white'>Bot</span>
                    </h1>
                    <div className="">
                        <ul className='hidden md:flex gap-3 text-[15px] font-medium'>
                            <li>
                                <Link href={'/'} className={router.pathname === '/' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/Commands'} className={router.pathname === '/Commands' ? 'text-white underline underline-offset-8 decoration-blue-600 ' : 'text-blue-500 hover:text-blue-600'}>Commands</Link>
                            </li>
                            <li>
                                <Link href={'/Vote'} className={router.pathname === '/Vote' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Vote</Link>
                            </li>
                            <li>
                                <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Add Bot</Link>
                            </li>
                            <li>
                                <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>About</Link>
                            </li>
                            <li>
                                <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Sponsor</Link>
                            </li>
                        </ul>
                    </div>
                    {nav && <div className=''>
                        <div className="bg-gray-800 w-full h-[160px] flex md:hidden top-[70px] left-0 absolute justify-center">
                            <ul className='flex flex-col justify-center text-center h-full gap-1 text-[15px] font-medium'>
                                <li>
                                    <Link href={'/'} className={router.pathname === '/' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Home</Link>
                                </li>
                                <li>
                                    <Link href={'/Commands'} className={router.pathname === '/Commands' ? 'text-white underline underline-offset-8 decoration-blue-600 ' : 'text-blue-500 hover:text-blue-600'}>Commands</Link>
                                </li>
                                <li>
                                    <Link href={'/Vote'} className={router.pathname === '/Vote' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Vote</Link>
                                </li>
                                <li>
                                    <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Add Bot</Link>
                                </li>
                                <li>
                                    <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>About</Link>
                                </li>
                                <li>
                                    <Link href={'/addbot'} className={router.pathname === '/addbot' ? 'text-white' : 'text-blue-500 hover:text-blue-600'}>Sponsor</Link>
                                </li>
                            </ul>
                        </div>
                    </div>}
                </div>
                <div className="flex items-center gap-2 ">
                    <button className='text-white flex md:hidden bg-blue-600/20 hover:bg-blue-600/40 rounded-lg p-2' onClick={() => setnav(!nav)}><AiOutlineMenu/></button>
                    <button className='text-white font-medium animate-bounce'>add a bot</button>
                </div>
            </div>
        </div>
    )
}

export default Header