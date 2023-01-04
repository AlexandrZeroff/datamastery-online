import React, { useState } from 'react'
import logo from '../assets/logo-1.svg'
import burger from '../assets/burger.svg'
import dot from '../assets/menu-dot.svg'
import close from '../assets/menu-close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  }

  return (
    <section id="navbar">
      <div className="relative px-4 h-[100px] flex items-center bg-white">
        <a href='/'>
          <img className="h-[50px]" src={logo} alt="Data Mastery"></img>
        </a>
        <nav className="menu-nav flex items-center ml-auto">
          <div className="flex">
            <img src={dot} alt=""></img>
            <AnchorLink href="#get-started">Data mastery</AnchorLink>
          </div>
          <div className="flex">
            <img src={dot} alt=""></img>
            <AnchorLink href="#benefits">Key benefits</AnchorLink>
          </div>
          <div className="flex">
            <img src={dot} alt=""></img>
            <AnchorLink href="#features">Features</AnchorLink>
          </div>
          <div className="flex">
            <img src={dot} alt=""></img>
            <AnchorLink href="#contact-us">Contact us</AnchorLink>
          </div>
        </nav>

        {toggleMenu ? (
          <img
            className="md:hidden w-8 cursor-pointer ml-auto"
            src={close}
            onClick={() => setToggleMenu(false)}
          ></img>
        ) : (
          <img
            className="md:hidden h-4 cursor-pointer ml-auto"
            src={burger}
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%', maxWidth: 420 }}
              className="nav-menu absolute w-64 h-[100vh] top-[100px] right-0 bg-white px-4 flex flex-col z-10"
            >
              <motion.nav
                className="menu-burger flex flex-col"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <div className="flex mt-8">
                  <img src={dot} alt="" className='w-1.5'></img>
                  <AnchorLink
                    href="#get-started"
                    onClick={() => setToggleMenu(false)}
                  >
                    Data mastery
                  </AnchorLink>
                </div>
                <div className="flex mt-8">
                  <img src={dot} alt="" className='w-1.5'></img>
                  <AnchorLink
                    href="#benefits"
                    onClick={() => setToggleMenu(false)}
                  >
                    Key benefits
                  </AnchorLink>
                </div>
                <div className="flex mt-8">
                  <img src={dot} alt="" className='w-1.5'></img>
                  <AnchorLink
                    href="#features"
                    onClick={() => setToggleMenu(false)}
                  >
                    Features
                  </AnchorLink>
                </div>
                <div className="flex mt-8">
                  <img src={dot} alt="" className='w-1.5'></img>
                  <AnchorLink
                    href="#contact-us"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact us
                  </AnchorLink>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Navbar
