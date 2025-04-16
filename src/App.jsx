import React from 'react'
import BG from './components/BG.jsx'
import ForeGround from './components/ForeGround.jsx'

const App = () => {
  return (
    <div className='w-screen relative h-screen bg-zinc-800'>
      <BG />
      <ForeGround />
    </div>
  )
}

export default App