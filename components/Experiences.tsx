import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import Cards from './Cards'

type Props = {
  experiences: Experience[];
}

const Experiences = ({experiences}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> EXPERIENCE </h3>

        <div className='w-full flex xl:mt-16  space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {experiences?.map((experience) =>(
              <Cards key={experience._id} experience={experience} />
            ))}
        </div>
    </motion.div>
  )
}

export default Experiences