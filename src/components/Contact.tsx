import React from 'react'
import { FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='w-full md:h-screen h-auto bg-[#121212] flex items-center justify-center px-4 md:py-0 py-40'>
      <div className='w-auto  h-[600px] bg-[#282828] text-2xl text-white rounded-2xl flex-col justify-between'>
        <div className='flex justify-between h-1/6'>
          <div className='flex flex-col justify-center items-start p-8 font-bold w-1/5'>
            <label>Name</label>
          </div>
          <div className='flex flex-col justify-center items-end p-8'>
            <input type="text" placeholder='John Doe / Jane Doe' className='bg-[#575757] rounded-2xl p-4 w-full md:w-[500px]' />
          </div>
        </div>
        
        <div className='flex justify-between h-1/6'>
          <div className='flex flex-col justify-center items-start p-8 font-bold w-1/5'>
            <label>Email</label>
          </div>
          <div className='flex flex-col justify-center items-end p-8'>
            <input type="text" placeholder='example@example.com' className='bg-[#575757] rounded-2xl p-4 w-full md:w-[500px]' />
          </div>
        </div>
        <div className='flex flex-col justify-center h-3/6'>
          <div className='flex justify-center items-start p-8 pt-0 font-bold'>
            <label>Message</label>
          </div>
          <div className='flex flex-grow justify-center items-end p-8 pt-0'>
            <textarea placeholder='Your Message' className='bg-[#575757] rounded-2xl p-4 w-full h-full resize-none' />
          </div>
        </div>
        <div className='flex flex-col justify-center h-1/6'>
        <button className='bg-[#67cbde] text-[#121212] font-bold m-8 mt-0 p-4 rounded-2xl
        group transition ease-in-out hover:scale-110 hover:text-white flex justify-center items-center'>
          <span className='mr-4'>Submit</span>
          <span className='group-hover:wiggle duration-300'>
            <FiSend className=''/>
          </span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Contact