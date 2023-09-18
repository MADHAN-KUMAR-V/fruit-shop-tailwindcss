import React, { useState } from 'react'
import Cards from './Cards'
import Divider from './Divider'

const SeasonSpecial = () => {

    const[fruits,setFruits]=useState([
        {
            id:7,
            image:'7',
            name:'orange',
            price:100
        },
        {
            id:1,
            image:'1',
            name:'Green Graps',
            price:100
        },
        {
            id:6,
            image:'6',
            name:'lemon',
            price:150
        }
    ])
  return (
    <section className='w-5/6 mx-auto py-10 mb-10' id='special'>
        <Divider title={'Season Special'}/>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 '>
        {
            fruits.map((fruit)=>{
                return <Cards key={fruit.id} fruit={fruit}/>
            })
        }
        </div>
    </section>
  )
}

export default SeasonSpecial