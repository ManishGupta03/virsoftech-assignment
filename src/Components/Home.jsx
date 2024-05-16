import  { useState } from 'react'

const Home = ({setQuantity,setCartArray,cryptoArray,cartArray,quantity}) => {
   
    const handleAdd =(item)=>{
        setCartArray([...cartArray,{item:item,quantity:quantity}]);
    }
  return (
    <>
        {
            cryptoArray.map((item,i)=>(
                <div className='cardContainer' key={i}>
                <div className='upper'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                    <input type="number" placeholder='Qty' className='quantityBox' onChange={(e)=>setQuantity(e.target.value)}/>
                    <button type='button' className='btn' onClick={()=>handleAdd(item)}>Add</button>
                </div>
            ))
        }

    </>
  )
}

export default Home