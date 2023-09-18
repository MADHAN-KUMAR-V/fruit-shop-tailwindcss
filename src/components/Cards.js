import React from 'react'

const Cards = ({fruit}) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-2xl border border-slate-300 transform hover:scale-110 duration-100 relative'>
        <img src={require(`../assets/${fruit.image}.jpeg`)} alt={fruit.name} className=' w-full object-cover border-b-2 border-slate-200 '/>
        <div className='flex flex-col items-center my-2  '>
            <span className='font-poppins text-slate-500'>{fruit.name}</span>
            <span className='font-poppins text-slate-500'>₹{fruit.price}</span>
        </div>
        <div className=' absolute top-3 right-3 bg-sky-300 text-white rounded p-1 text-xl'>1% off</div>
    </div>
  )
}

export default Cards