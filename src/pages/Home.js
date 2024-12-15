import React, { useState } from 'react'
import {FaArrowRight} from "react-icons/fa"
import { Link, matchPath } from 'react-router-dom'
import HighlightText from '../componenets/core/HomePage/HighlightText'
import CTAButton from '../componenets/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../componenets/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../componenets/core/HomePage/LearningLanguageSection'
import TimelineSection from '../componenets/core/HomePage/TimelineSection'
import ExploreMore from '../componenets/core/HomePage/ExploreMore'
import InstructorSection from '../componenets/core/HomePage/InstructorSection'
import Footer from '../componenets/common/Footer'
import RatingSlider from '../componenets/core/Ratings/RatingSlider';
import Catalog from './Catalog'



import { NavbarLinks } from '../data/Nav'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { categories } from '../services/apis'
import { apiConnector } from '../services/apiconnector'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { toast } from "react-hot-toast"
import Item from './Item'



const Home = ({setProgress}) => {

  const dispatch = useDispatch();

  const { token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.profile);
  const { totalItems } = useSelector(state => state.cart);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();



  const location = useLocation()
  const matchRoutes = (routes) => {
      return matchPath({ path: routes }, location.pathname)
  }


  const [sublinks, setsublinks] = useState([]);
  const fetchSublinks = async () => {
      try {
          const result = await apiConnector("GET", categories.CATEGORIES_API);
          if (result?.data?.data?.length > 0) {
              setsublinks(result?.data?.data);
          }
          localStorage.setItem("sublinks", JSON.stringify(result.data.data));

      } catch (error) {
          // setsublinks(JSON.parse(localStorage.getItem("sublinks")));
          // console.log("could not fetch sublinks",localStorage.getItem("sublinks"));
          toast.error("Categories not found");
          console.log("Could not fetch Category",error);
      }
  }
  useEffect(() => {
      fetchSublinks();
  }, [])

  const show = useRef();
  const overlay = useRef();

  const shownav = () => {
      show.current.classList.toggle('navshow');
      overlay.current.classList.toggle('hidden');
  }

  

  //handeling navbar scroll
  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > prevScrollPos) {
          setVisible(false)
      } else {
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  const handelSearch = (e) => {
      e.preventDefault();
      if (searchValue?.length > 0) {
          navigate(`/search/${searchValue}`);
          setSearchValue("");
      }
  }





  return (
    <div>
      {/*section1*/}
       
       
      {/* <nav className=''>
                    <ul className='flex  mt-2 ml-8  w-9/12 max-w-maxContent items-center justify-between text-richblack-5' >
                        {
                            NavbarLinks?.map((element, index) => (
                                <li key={index} >
                                    {(<div className='flex  gap-x-4  '>
                                                <div className='flex flex-col'></div>
                                                {
                                                    sublinks?.length < 0 ? (<div></div>) : (
                                                        sublinks?.map((element, index) => (
                                                            <Link to={`/catalog/${element?.name}`} key={index} className=" bg-transparent gap-40 py-4 pl-4 hover:border-b-richblue-50" onClick={() => { dispatch(setProgress(30)) }}>
                                                                <p className='flex  gap-x-4 hover:text-yellow-25'>
                                                                    {element?.name}
                                                                </p>
                                                            </Link>
                                                        ))
                                                    )

                                                }
                                                </div>) 
                                    }
                                </li>
                            ))
                        }
                       
                    </ul>
      </nav> */}

      <div className="relative mx-auto flex w-9/12 max-w-maxContent flex-col 
      items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
      
      

        
    
        
        <div className=" text-center text-3xl md:text-4xl font-semibold mt-20">
              Find Your Ideal Space 
             <HighlightText text={"With Ease"} />
         </div>

         

         {/* Sub Heading */}
        <div className="mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300">
          With our rental platform, you can browse properties at your 
          convenience, from anywhere in the world, and access a wide range
           of options, including detailed listings, high-quality images, 
          and seamless communication with property owners or renters.
        </div>

        <div className='flex flex-row gap-7 mt-8'>
          

          
        </div>
        
        <Item></Item>
        
         
        {/* <div className="mx-3 my-12 shadow-blue-200 w-[70%] relative">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}

        {/* Code Section 1  */}
        {/* <div className='p-5 shadow-lg shadow-black'>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="font-semibold text-2xl lg:text-4xl sm:w-full">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />

            
        </div> */}
         
         {/* Code Section 2 */}
        {/* <div className='p-5 shadow-lg shadow-black my-12'>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div> */}
      
          {/* Explore Section */}
          {/* <ExploreMore /> */}
      
      </div>


      {/*section2*/}
    
      {/* <div className="bg-pure-greys-5 text-richblack-700 my-24 px-36 pb-4"> */}
        {/* <div className="homepage_bg h-[320px] ">
          
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div> */}


        {/* <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div> */}
        {/* </div>   */}
        
          {/* Timeline Section - Section 2 */}
              {/* <TimelineSection /> */}

          {/* Learning Language Section - Section 3 */}
              {/* <LearningLanguageSection /> */}



        {/* </div> */}


         


      {/*section3*/}

      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
        {/* Become a instructor section */}
        {/* <InstructorSection /> */}

                {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>

        <RatingSlider /> */}


      {/* </div> */}

      {/*Footer*/}

      {/* <Footer/> */}

    </div>
  )
}

export default Home
