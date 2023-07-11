import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  button: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, button, link}) => {
  return (
    <div className='md:w-[400px] h-[300px] bg-[#282828] text-white text-2xl font-bold rounded-2xl p-6 m-0 flex flex-col justify-between'>
      <div>
        <p className='mb-4'>{title}</p>
        <p className='text-[#8b8b8b] text-xl font-normal mb-4'>{description}</p>
      </div>
      <a href={link} className='
      group transition ease-in-out hover:scale-110 hover:text-white
      w-[200px] bg-[#67cbde] text-[#282828] text-base rounded-2xl p-2
      flex justify-center items-center'>
        <span className='mr-4'>{button}</span>
          <span className='group-hover:rotate-90 duration-300'>
            <FaArrowRight className=''/>
          </span>
      </a>
    </div>
  )
}

export default ProjectCard