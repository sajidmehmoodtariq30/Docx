import React from 'react'

const BG = () => {
  return (
    <div className='w-screen h-screen z-[2] fixed overflow-hidden'>
        <div className="w-full py-10 flex justify-center text-zinc-200 font-semibold text-xl">Documents</div>
        <h1 className='text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-400 leading-none tracking-tighter '>Docx</h1>
    </div>
  )
}

export default BG