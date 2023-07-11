import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='w-full md:h-screen h-auto bg-[#121212] flex items-center justify-center px-4 md:py-0 py-40'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 w-[800px] md:w-auto'>
        <ProjectCard title='Project 1' description='Project Description' button='View on GitHub' link='/'/>
        <ProjectCard title='Project 2' description='Project Description' button='View on GitHub' link='/'/>
        <ProjectCard title='Project 3' description='Project Description' button='View on GitHub' link='/'/>
        <ProjectCard title='Project 4' description='Project Description' button='View on GitHub' link='/'/>
        <ProjectCard title='Project 5' description='Project Description' button='View on GitHub' link='/'/>
        <ProjectCard title='Project 6' description='Project Description' button='View on GitHub' link='/'/>
      </div>
    </div>
  )
}

export default Projects