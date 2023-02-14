import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';
import {BsDownload} from 'react-icons/bs'

const Header = () => {
    const router = useRouter()
    const [nav, setnav] = useState(false)
    return (
        <div>
            <nav className="w-full h-[6rem] flex justify-between items-center container mx-auto">
                <div>
                    <Link href='/pages/PlusBot' className='text-[#a8ada9] hover:text-white font-semibold text-3xl'>PlusBot</Link>
                </div>
                <div>
                    <ul className='hidden md:flex  gap-5 text-gray-400  font-medium'>
                        <Link href="/" className='' legacyBehavior>
                            <a className={router.pathname === '/' ? 'underline  text-white' : ''}>Home</a>
                        </Link>
                        <Link href="/Commands" legacyBehavior>
                            <a className={router.pathname === '/Commands' ? 'underline  text-white' : ''}>Komutlar</a>
                        </Link>
                    </ul>
                </div>

                <div className='flex gap-5'>
                    <button className='py-1 px-2 rounded-full text-white text-xl hover:bg-[#191a19] md:hidden flex' onClick={() => setnav(true)}><AiOutlineMenuUnfold /></button>
                    <button className='py-1 px-2 rounded-full text-white text-xl hover:bg-[#191a19] animate-bounce'><BsDownload /></button>
                </div>
            </nav>
            {nav &&
                <OutsideClickHandler onOutsideClick={() => setnav(false)}>
                    <div className='absolute z-50 bg-blue-700/20 w-full h-[200px] top-20 left-0 md:hidden'>
                        <div className="flex justify-center items-center h-full text-center">
                            <ul className='flex flex-col gap-2'>
                                <Link href="/" className='' legacyBehavior>
                                    <a className={router.pathname === '/' ? 'underline  text-white' : ''}>Home</a>
                                </Link>
                                <Link href="/Commands" legacyBehavior>
                                    <a className={router.pathname === '/Commands' ? 'underline  text-white' : ''}>Komutlar</a>
                                </Link>
                            </ul>
                        </div>
                        <button className='absolute top-2 right-2 text-white text-xl' onClick={() => setnav(false)}><AiFillCloseCircle /></button>
                    </div>
                </OutsideClickHandler>
            }


        </div>
    )
}

export default Header