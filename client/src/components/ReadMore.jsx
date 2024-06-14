import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const ReadMore = () => {
  return (
    <div className="flex w-fit items-center gap-1 border-b border-black">
        <span className="text-sm">Read More</span>
        <FiArrowRight/>
    </div>
  )
}
