import { projects } from '@/data'
import { describe } from 'node:test'
import { title } from 'process'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects" >
        <h1 className="heading">
            A small Selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>
<div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
    {projects.map(({
        id,
        title,
        des,
        img,
        iconLists,
        link,

    })=>(
        <div key={id} className='  lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden lg:h-[30vh] h-[20vh] mb-10">
                    <div className="relative w-full h-ful overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor:"#13162d"}}
                    >
                        <img src= "/bg.png" alt="bg-img"></img>
                    </div>
                    <img src={img} alt="COVER" className='z-10 absolute bottom-0'></img>
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                    {title}
                </h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                    {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className='flex items-center'>
                        {iconLists.map((icon , index)=>(
                            <div key={icon} className="border border-white/[0.4]  rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                            style={{transform:`translateX(-${5* index * 2}px)`}}>
                                <img src={icon} alt={icon} className="p-2">
                                </img>
                            </div>   
                        ))}
                    </div>

                
                    <div className='flex justify-center items-center'>
                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                         Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9"/>
                    </div>
                </div>        
                
                        
            </PinContainer>
        </div>
       ))}

    </div>
</div>
  )
}
