import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({ course, Height }) => {
    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    }, [course]);

    useEffect(() => {
        console.log(course);
    }, [course]);
    

    return (
        <div className='mb-4 hover:scale-[1.03] transition-all duration-200 z-50 flex items-center ]'>
            <Link to={`/courses/${course._id}`}>
                <div>
                    <div>
                        <img
                            src={course?.thumbnail}
                            alt='course thumbnail'
                            className={`${Height} rounded-xl object-cover w-[380px]`}
                        />
                </div>
                    <div className=''>
                            
                            <div className='flex justify-between mt-6 mr-6 ml-6 mb-4'>
                                 {/* Course Name */}
                                 <h2 className='text-xl font-semibold text-richblack-5 '>{course?.courseName}</h2>
                            
                                 {/* Course Description */}
                                 <p className='text-xl font-semibold text-white '>{course?.courseDescription}</p>
                            </div>
                            
                            <div className='flex justify-between mr-6 ml-6'>

                                   {/* Course Tag */}
                                    <p className='text-xl font-semibold text-yellow-400 uppercase mb-4'>{course?.tag}</p>
                                    
                                    {/* Course Price */}
                                    <p className='text-xl font-semibold text-yellow-500 mb-4'>
                                        <span className='text-white line-through text-sm mr-2'>{course?.originalPrice ? `Rs. ${course?.originalPrice}` : null}</span>
                                        Rs. {course?.price}
                                    </p>

                            </div>
                            
                            {/* Ratings and Reviews */}
                            {/* <div className='flex justify-center items-center gap-x-3 mb-4'>
                                <RatingStars Review_Count={avgReviewCount} />
                                <span className='text-sm text-white'>({course?.ratingAndReviews?.length} Ratings)</span>
                            </div> */}
                            
                            
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Course_Card;
