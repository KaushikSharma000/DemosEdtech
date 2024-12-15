import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=' text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white'>
      We are passionate about transforming the rental experience. Our innovative platform
      <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent 
      bg-clip-text font-bold'>"combines technology,</span>
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text
       font-bold'>
        {" "}
        expertise
      </span>
       and community to create an 
      <span  className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
      {" "}
      unparalleled property rental experience"
      </span>
    </div>
  )
}

export default Quote