import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import hotel from '../assets/Logo/hotel.jfif'
import hostel from '../assets/Logo/hostel.jfif'
import apartment from '../assets/Logo/apartment.jfif'
import bungalow from '../assets/Logo/bungalow.jfif'
import cabin from '../assets/Logo/cabin.jfif'
import dormitory from '../assets/Logo/dormitory.jfif'
import flat from '../assets/Logo/flat.jfif'
import studio from '../assets/Logo/studio.jfif'
import suite from '../assets/Logo/suite.jfif'
import villa from '../assets/Logo/villa.jfif'
import Office from '../assets/Logo/Office.jfif'
import Retail from '../assets/Logo/Retail.jfif'
import { apiConnector } from '../services/apiconnector'
import { categories } from '../services/apis'
import CTAButton from '../componenets/core/HomePage/Button'

const Item = () => {
   
  

  return (
    <div className="grid  mb-64  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

        
          
     <div className=' mt-10 mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Hotel`}>
                <div>
                    <div>
                        <img 
                            src={hotel}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Hotel</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>

    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Hostel`}>
                <div>
                    <div>
                        <img 
                            src={hostel}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Hostel</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>

    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
                
            <Link to={`/catalog/Flat`}>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <img 
                            src={flat}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-2'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Flat</p>
                        
                    </div>
                </div>
                
            </Link>    

      
    </div>
    
    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Apartment`}>
                <div>
                    <div>
                        <img 
                            src={apartment}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Apartment</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>
   
    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Bungalow`}>
                <div>
                    <div>
                        <img 
                            src={bungalow}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Bungalow</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>
    
    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Cabin`}>
                <div>
                    <div>
                        <img 
                            src={cabin}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Cabin</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>
 
    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Dormitory`}>
                <div>
                    <div>
                        <img 
                            src={dormitory}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Dormitory</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>

   <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Studio`}>
                <div>
                    <div>
                        <img 
                            src={studio}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Studio</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>


    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Suite`}>
                <div>
                    <div>
                        <img 
                            src={suite}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Suite</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>

    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Villa`}>
                <div>
                    <div>
                        <img 
                            src={villa}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Villa</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>

    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Office`}>
                <div>
                    <div>
                        <img 
                            src={Office}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Office</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>
    
    <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
            <Link to={`/catalog/Retail`}>
                <div>
                    <div>
                        <img 
                            src={Retail}
                            alt='course thumbnail'
                            className={`h-48 w-60 rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col gap-2 px-1 py-3'>
                        <p className='text-sm md:text-xl text-richblack-5 text-center'>Retail</p>
                        {/* <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-white'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p> */}
                        <div className='flex gap-x-3'>
                            
                            
                            {/* <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span> */}
                        </div>
                        {/* <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p> */}
                    </div>
                </div>
            </Link>

      
    </div>


    </div>
  )
}

export default Item