import React from 'react'
import {FaRocket} from 'react-icons/fa'

const CardsItem = ({title,desc,icon}) =>{
  return(
    <div className='text-center flex flex-col items-center gap-2'>
        <div className=''>
            <h1 className='bg-blue-500/20 py-2 px-3 rounded-lg text-blue-600'>{icon}</h1>
        </div>
        <div className='text-white'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-md text-gray-500 font-medium'>{desc}</p>
        </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className='gap-10 grid-cols-1 md:grid-cols-3 grid'>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
      <CardsItem title='Peformans' desc='bot hızlı ve performanslı ve pingsiz sunucunuzu daha iyi halde görün' icon={<FaRocket/>}/>
    </div>
  )
}

export default Cards