import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Rental for",
      highlightText: "Everyone, Everywhere",
      description:
        "Rental collaborates with trusted providers to offer flexible, affordable, and convenient spaces to individuals and businesses worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Tailored for Your Rental Needs",
      description:
        "Save time and money! Rental offers spaces that align perfectly with your lifestyle and preferences.",
    },
    {
      order: 2,
      heading: "Our Approach",
      description:
        "Rental collaborates with trusted providers to deliver flexible, affordable, and convenient rental options.",
    },
    {
      order: 3,
      heading: "Verified Listings",
      description:
        "Rental ensures high-quality, verified spaces, giving you peace of mind every step of the way.",
    },
    {
      order: 4,
      heading: "Customer Reviews",
      description:
        "Rental features transparent ratings and reviews, helping you make the best decisions for your needs.",
    },
    {
      order: 5,
      heading: "Move-In Ready",
      description:
        "Find fully prepared, ready-to-use spaces with Rental—perfect for immediate move-ins.",
    },
  ];


const LearningGrid = () => {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighlightText text={card.highlightText} />
                            </div>
                            <p className='font-medium'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <CTAButton active={true} linkto={card.BtnLink}>
                                    {card.BtnText}
                                </CTAButton>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-richblack-5 text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-richblack-300 font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid