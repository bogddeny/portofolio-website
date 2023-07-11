import React from 'react'
import Typewriter from 'typewriter-effect'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#121212] flex items-center justify-center px-4 md:py-0 py-40'>
      <div className='w-[800px] h-auto bg-[#282828] text-white rounded-2xl py-6 px-8 flex flex-col justify-between'>
        <p className='text-2xl text-[#67cbde] '>
          Hello, my name is
        </p>
        <p className='text-4xl font-bold pt-0'>
          Bogdan Denysenko
        </p>
        <p className='text-4xl text-[#8b8b8b] font-bold pt-0'>
          I'm a Software Developer,
        </p>
        <p className='text-2xl text-[#717171] pt-0'>
          I like writing {' '}
          <span className='inline-block text-[#67cbde]'>
            <Typewriter
              options={{
                strings: ['Java', 'Python', 'Rust', 'React', 'TS'],
                autoStart: true,
                loop: true,
                cursor: '_',
              }}
            />
          </span>.
        </p>
        <button className='mt-8 transition ease-in-out hover:scale-110 hover:text-white group w-[200px] p-4 my-2 rounded-2xl bg-[#67cbde] text-[#121212] font-bold flex justify-center items-center'>
          <span className='mr-4'>View Projects</span>
          <span className='group-hover:rotate-90 duration-300'>
            <FaArrowRight className=''/>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Home