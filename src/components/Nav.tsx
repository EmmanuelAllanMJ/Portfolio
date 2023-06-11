import {motion} from 'framer-motion';
import avatar from "/images/avatar.png";
import {useState} from 'react';

export default function Nav() {
    const [toggled, setToggled] = useState(true);
    const navMotion = {
        visible: {
          opacity: 1,
        x: 0,
        scale: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
          },
        },
        hidden: {
            x: 100,
            scale: 0.3,
          opacity: 0,
        },
      }
      const itemMotion = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
    return (
    <nav className='relative mx-8 mb-24 flex items-center justify-between pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L428 2" stroke="#282828" strokeLinecap='round' strokeWidth={2}/>
      </svg>
      <div>
        <img src={avatar} alt="Profile picture of Emmanuel Allan" className="w-10 h-10 rounded-full"  />
      </div>

      {/* Title */}
        <h1 className="text-lg font-bold">
            <a href="/">Emmanuel Allan</a>
        </h1>

        <div className='gap-10 hidden xl:flex'>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
        </div>

        {/* Hamburger */}
        <div className='space-y-1.5 cursor-pointer xl:hidden z-50' onClick={() => setToggled((prevToggle) => !prevToggle)}>
            <motion.span animate={{rotateZ:toggled?45:0, y:toggled?8:0}} className="block h-0.5 w-8 bg-black "></motion.span>
            <motion.span animate={{width:toggled?0:24}} className="block h-0.5 w-6 bg-black "></motion.span>
            <motion.span animate={{rotateZ:toggled?-45:0, y:toggled?-8:0, width:toggled?32 : 16}} className="block h-0.5 w-4 bg-black "></motion.span>

        </div>
        
        {/* toggled */}
        {toggled && (<div className='xl:hidden fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center '>
            <motion.div
            variants={navMotion}
            initial="hidden"
            animate="visible"
             className='flex flex-col gap-24 text-lg'>
                <motion.a variants={itemMotion} href="/">Home</motion.a>
                <motion.a variants={itemMotion} href="/services">Services</motion.a>
                <motion.a variants={itemMotion} href="/about">About</motion.a>
            </motion.div>
        </div>)}
        </nav>
    );
}
