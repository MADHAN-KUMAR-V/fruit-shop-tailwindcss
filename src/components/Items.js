import React, { useState } from 'react'
import Cards from './Cards'

const Items = () => {
    const[fruits,setFruits]=useState(
        [   
            {
                id:1,
                image:'1',
                name:'Green Graps',
                price:100
            },  {
                id:2,
                image:'2',
                name:'Poegranate',
                price:200
            },  {
                id:3,
                image:'3',
                name:'Black Graps',
                price:300
            },
            {
                id:4,
                image:'4',
                name:'Lemon',
                price:300
            },
            {
                id:5,
                image:'5',
                name:'Cherry',
                price:250
            },
            {
                id:6,
                image:'7',
                name:'Orange',
                price:150
            },
        ]
    )
  return (
    
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 '>
        {
            fruits.map((fruit)=>{
                return <Cards key={fruit.id} fruit={fruit}/>
            })
        }
    </section>
  )
}

export default Items