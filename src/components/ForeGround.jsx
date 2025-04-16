import React, { useRef } from 'react'
import Card from './Card'

const data = [
  {
    id: 1,
    fileSize: '0.8Mb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
    close: true,
    tag: {
      isOpen: true,
      tagTitle: 'Download Now',
      tagColor: "bg-green-400"
    }
  },
  {
    id: 2,
    fileSize: '0.8Mb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
    close: false,
    tag: {
      isOpen: true,
      tagTitle: 'Download Now',
      tagColor: "bg-blue-400"
    }
  },
]

const ForeGround = () => {
  const ref = useRef(null)
  return (
    <div>
      <div ref={ref} className="fixed flex gap-10 flex-wrap p-5 top-0 left-0 z-[3] w-full h-full">
        {data.map((item,index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default ForeGround