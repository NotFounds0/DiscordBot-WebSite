import React from 'react'
import {TbServer} from 'react-icons/tb'
import {HiUsers} from 'react-icons/hi'
import {BiCommand} from 'react-icons/bi'

const StatCardsItem = ({number,icon,title}) =>{
  
    return(
        <div className='flex flex-col gap-5'>
        <div className='text-center'>
            <span className='text-xl text-gray-500 font-bold flex items-center gap-3'>{icon} {number}</span>
            <h1 className='text-2xl text-blue-600 font-medium'>{title}</h1>
        </div>
    </div>
        
        )
}


const StatCards = () => {
  return (
    <div className='flex gap-10'>
        <StatCardsItem number='15' icon={<TbServer/>} title='Sunucu'/>
        <StatCardsItem number='1k' icon={<HiUsers/>} title='User'/>
        <StatCardsItem number='150' icon={<BiCommand/>} title='Commands'/>
    </div>
  )
}

export default StatCards