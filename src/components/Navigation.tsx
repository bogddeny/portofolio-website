import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Navigation = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => setNav(!nav)

  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setShowTopButton(scrollTop > 300); // Show button when scroll position is greater than 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-[#121212] text-white fixed font-bold'>
      {/* Top Bar */}
      <div className='bg-gradient-to-b from-[#282828] to-transparent text-[#ffffff] w-screen h-[80px] flex justify-between items-center'>
        <a href='/' className='transition ease-in-out hover:text-white hover:bg-[#67cbde] bg-[#3f3f3f] text-[#67cbde] p-4 px-8 m-4 rounded-2xl'>Bogdan Denysenko</a>

        <ul className='transition ease-in-out hidden md:flex bg-[#3f3f3f] hover:bg-transparent text-[#ffffff] m-4 rounded-2xl'>
          <li className='transition ease-in-out hover:bg-[#67cbde] rounded-2xl p-4 px-8'>Home</li>
          <li className='transition ease-in-out hover:bg-[#67cbde] rounded-2xl p-4 px-8'>About</li>
          <li className='transition ease-in-out hover:bg-[#67cbde] rounded-2xl p-4 px-8'>Projects</li>
          <li className='transition ease-in-out hover:bg-[#67cbde] rounded-2xl p-4 px-8'>Contact</li>
        </ul>

        <div onClick={toggleNav} className='transition ease-in-out hover:text-white hover:bg-[#67cbde] md:hidden bg-[#3f3f3f] text-[#ffffff] rounded-2xl p-5 m-4 z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      {/* Mobile Menu */}
      <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#121212] text-[#ffffff] flex flex-col justify-center items-center'}>
          <li className='transition ease-in-out hover:text-[#67cbde] py-8 text-4xl'>Home</li>
          <li className='transition ease-in-out hover:text-[#67cbde] py-8 text-4xl'>About</li>
          <li className='transition ease-in-out hover:text-[#67cbde] py-8 text-4xl'>Projects</li>
          <li className='transition ease-in-out hover:text-[#67cbde] py-8 text-4xl'>Contact</li>
        </ul>
      </div>
      {/* Link Icons */}
      <div className='flex fixed flex-col bottom-0 left-0'>
        <ul>
          <li className='transition ease-in-out hover:scale-110 bg-[#3f3f3f] text-[#ffffff] w-[50px] h-[50px] flex justify-center items-center rounded-2xl m-4'>
            <a href="https://github.com/bogddeny" className='p-2 hover:animate-pulse'>
              <FaGithub size={30} />
            </a>
          </li>
          <li className='transition ease-in-out hover:scale-110 bg-[#3f3f3f] text-[#ffffff] w-[50px] h-[50px] flex justify-center items-center rounded-2xl m-4'>
            <a href="https://www.linkedin.com/in/bogdan-denysenko-3a2055273/" className='p-2 hover:animate-pulse'>
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Back To Top Icon */}
      <div onClick={scrollToTop} className={!showTopButton ? 'hidden' : 'transition ease-in-out hover:scale-110 bg-[#3f3f3f] text-[#ffffff] w-[50px] h-[50px] fixed flex-col bottom-0 right-0 flex justify-center items-center rounded-2xl m-4'}>
        <div className='p-2 hover:animate-pulse'>
          <FaArrowUp size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navigation