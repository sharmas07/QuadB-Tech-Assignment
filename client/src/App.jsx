import { useState } from 'react'
import './App.css'
import CryptoTable from './components/CryptoData'
import image from './assets/image.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className='image' src={image} alt="" />
     <CryptoTable />
    </>
  )
}

export default App
 