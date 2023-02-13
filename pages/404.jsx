import Image from 'next/image'
import React from 'react'

const Custom404 = () => {
    return (
        <div className='flex justify-center items-center w-full h-[525px]'>
            <div className="">
                <div className="relative w-[450px] h-[450px]">
                    <Image alt='' src={'/images/404.png'} fill />
                </div>
            </div>
        </div>
    )
}

export default Custom404