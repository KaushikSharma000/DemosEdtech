import React from "react"
import { HiOutlineVideoCamera } from "react-icons/hi"

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div>
      <div className="flex justify-center py-2">
        
          <p>{subSec?.title}</p>
          {subSec?.imageUrl && (
            <img 
              src={subSec?.imageUrl} 
              alt={subSec?.title}
              className="w-[80%] h-80 object-cover"
            />
          )}
        </div>
      
    </div>
  )
}

export default CourseSubSectionAccordion
