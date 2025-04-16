import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="relative px-8 py-5 w-60 h-72 rounded-xl bg-zinc-300 text-zinc-800 cursor-pointer overflow-hidden">
      <FaRegFileAlt />
      <p className='text-xs leading-tight mt-5 font-semibold '>{data.description}</p>
      <footer className='absolute bottom-0 left-0  w-full'>
        <div className='flex justify-between py-3 px-7 items-center mb-3'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7  bg-zinc-200 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose className='text-zinc-800' /> : <LuDownload className='text-zinc-800' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`w-full p-4 transition-all ${data.tag.tagColor}  flex items-center justify-center rounded-tl-3xl rounded-tr-3xl`}>
            <p className="text-md font-semibold">{data.tag.tagTitle}</p>
          </div>
        )
        }
      </footer>
    </motion.div>
  )
}

export default Card