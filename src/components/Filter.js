import React, { useState } from 'react'

const Filter = () => {
    const [selectedItem,setSeletedItem]=useState(2);
  return (
    <section className=' my-10 py-3  w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button onClick={()=>setSeletedItem(1)} 
        className={`btn ${selectedItem ===1 ?  'bg-green-500 text-white':'text-slate-500'}`}>Latest</button>
        <button onClick={()=>setSeletedItem(2)} 
        className={`btn ${selectedItem ===2 ?  'bg-green-500 text-white':'text-slate-500'}`}>Best Seller</button>
        <button onClick={()=>setSeletedItem(3)} 
        className={`btn ${selectedItem ===3 ?  'bg-green-500 text-white':'text-slate-500'}`}><a href={'#special'}>Specials</a></button>
    </section>
  )
}

export default Filter