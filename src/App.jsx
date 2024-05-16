import { useState } from 'react'
import './App.css'
import Home from './Components/Home';


function App() {
  const [quantity,setQuantity]=useState(0);
  const cryptoArray=[{name:"Bitcoin",price:"25000"},
  {name:"Doge",price:"0.75"},
  {name:"Ripple",price:"1.5"}];
  const[cartArray,setCartArray]=useState([]);
  return (
    <>
    <div className='cryptoCurrencies'>
      <Home setQuantity={setQuantity} setCartArray={setCartArray} cryptoArray={cryptoArray} cartArray={cartArray} quantity={quantity}/>
    </div>
    <div className='cartDiv'>
      <p>MY CART</p>
      <div className='headings'>
        <h3>Coin</h3>
        <h3>Qty</h3>
        <h3>Amount</h3>
        </div>
        {
          cartArray.map((item,i)=>(
            <div key={i} className='headings'>
            <p>{item.item.name}</p>
            <p>{item.quantity}</p>
            <p>{(parseFloat(item.item.price)*parseFloat(item.quantity)).toFixed(1)}</p>
            </div>
          ))
        }
        
        <h1 className='total'>Total:{cartArray.reduce((sum,current)=>sum+=(parseFloat(current.quantity)*parseFloat(current.item.price)),0).toFixed(1)}</h1>
        </div>
    </>
  )
}

export default App
