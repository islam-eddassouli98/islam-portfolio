import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

const Cards = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[50%] md:h-full snap-center bg-[#292929]  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <img
        className='w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
         alt="" />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-light'>Front End Developer</h4>
            <p className='font-bold text-1xl md:text-2xl mt-1'>Soprasteria</p>
            <div className='flex justify-center items-center space-x-2 my-2'>
                {/* <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" /> */}
                {experience.technologies.map((technology,i)=> (
                    <img key={i} className="h-10 w-10 rounded-full" src={urlFor(technology.image).url()} alt="" />
                ))}
            </div> 
            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} </p>
            <ul className='list-disc max-h-[150px] md:max-h-full space-y-4 ml-5 text-xs md:text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}    
            </ul>   
        </div>    
    </article>
  )
}

export default Cards