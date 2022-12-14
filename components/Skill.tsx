import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Technology } from '../typings';

type Props = {
    skill:Technology;
    directionLeft?: boolean;
}

const Skill = ({skill, directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -50 : 50,
            opacity:0,
        }}
        transition={{ duration:1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()} alt=""
        className='rounded-full border border-gray-500 object-cover w-[4.5rem] h-[4.5rem] md:h-28 md:w-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[4.5rem] w-[4.5rem] md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
        </div>
    </div>
  )
}

export default Skill