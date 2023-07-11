import React from 'react'
import profile_image from '../assets/profile_image.jpg'

const About = () => {
  return (
    <div className='w-full md:h-screen h-auto bg-[#121212] flex items-center justify-center px-4 md:py-0 py-40'>
      <div className='w-[800px] h-auto bg-[#282828] text-[#8b8b8b] rounded-2xl p-8 flex flex-col justify-center items-center'>
        <img src={profile_image} alt='Profile' width={250} height={250} className='rounded-full border-8 border-[#67cbde]'/>
        <p className='text-2xl pt-8'>
          I am a Software Engineering student at the University of Peloponnese (Patras Greece).
          I have finished my courses and am now looking for a Internship possition. I mainly
          specialize in developing desktop application using Python, Java, Rust. But I have a
          bit of experience writing websites, both using HTML/CSS/JS and React/TS/Tailwind like
          this website. I also have a little bit of experience with SQL and NoSQL databases
          from my university cources.
        </p>
      </div>
    </div>
  )
}

export default About