import React from 'react'

const Contact = () => {
  return (
    <div className='w-full md:h-screen h-auto bg-[#121212] flex items-center justify-center px-4 md:py-0 py-40'>
      <div className='w-[800px] h-[600px] bg-[#282828] text-2xl text-white rounded-2xl flex-col justify-between'>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-center items-start p-8'>
            <label>Name</label>
          </div>
          <div className='flex flex-col justify-center items-end p-8'>
            <input type="text" className='bg-[#575757] rounded-2xl p-4 w-[300px] md:w-[500px]' />
          </div>
        </div>
        
        <div className='flex justify-between'>
          <div className='flex flex-col justify-center items-start p-8'>
            <label>Email</label>
          </div>
          <div className='flex flex-col justify-center items-end p-8'>
            <input type="text" className='bg-[#575757] rounded-2xl p-4 w-[300px] md:w-[500px]' />
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col justify-center items-start p-8'>
            <label>Message</label>
          </div>
          <div className='flex flex-col justify-center items-end p-8'>
            <input type="text" className='bg-[#575757] rounded-2xl p-4 w-[300px] md:w-[500px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact