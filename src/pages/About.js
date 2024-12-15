import React from 'react'
import HighlightText from '../componenets/core/HomePage/HighlightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../componenets/core/AboutPage/Quote"
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../componenets/core/AboutPage/Stats'
import LearningGrid from '../componenets/core/AboutPage/LearningGrid'
import ContactFormSection from '../componenets/core/AboutPage/ContactFormSection'
import Footer from "../componenets/common/Footer"
// import RatingSlider from '../componenets/core/Ratings/RatingSlider';

const About = () => {
  return (
    <div className='mx-auto text-white'>
      {/* section 1 */}
      <section className='bg-richblack-700'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
            <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Driving Innovation in Property Rentals for a 
                <HighlightText text={"Better Living Experience"}/>
                <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>
                RentEase is at the forefront of transforming the rental experience. We're passionate about creating a better living and working environment by offering diverse property options, leveraging modern technology, and fostering a seamless rental community</p>
            </header>
            <div className='sm:h-[70px] lg:h-[150px]'></div>
            <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
                <img src={BannerImage1} />
                <img src={BannerImage2} />
                <img src={BannerImage3} />
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='border-b border-richblack-700'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className='h-[100px] '></div>
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
            {/* foudning story wala div */}
            <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
                {/* founding story left box */}
                <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Founding Story</h1>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
                {/* foudning story right box */}
                <div>
                    <img className='shadow-[0_0_20px_0] shadow-[#FC6767]'  src={FoundingStory} />
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
                {/* left box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl
                     font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Driven by our 
                      vision, we set out to redefine the rental experience, making it easier and more 
                      efficient for people to find spaces that meet their needs. Our team of passionate 
                      experts has created an intuitive platform that combines advanced technology with a 
                      diverse selection of properties, enabling a smooth, convenient, and rewarding 
                      rental journey.
                    </p>
                </div>

                {/* right box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        Our Mission
                    </h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our mission goes beyond simply offering properties for rent. We aim to build a thriving community of renters and property owners, where individuals can connect, collaborate, and find the perfect spaces to live or work. We believe that a positive rental experience is rooted in trust and open communication, and we foster this spirit through community forums, 
                      live support, and networking opportunities that bring people together.</p>
                </div>
            </div>
        </div>
      </section>  

      {/* section 4 */}
      <StatsComponent/>  
      
      {/* section 5 */}
      <section className='mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section>
      {/* <div className=' mb-16 mt-3 w-screen'>
        <h2 className='text-center text-4xl font-semibold mt-8 text-richblack-5 mb-5'>Reviews from other learners</h2>
        <RatingSlider />
      </div> */}
      </section>
      
       

    </div>
  )
}

export default About