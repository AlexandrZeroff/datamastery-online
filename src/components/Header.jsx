import React from 'react'
import figure from '../assets/Rectangle 27.svg'
import arrow from '../assets/arrow.svg'
import poster from '../assets/poster1.jpg'
import posterfull from '../assets/poster-full.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <section id="header">
      <div className="header-container bg-header relative overflow-hidden pb-16 over">
        <div className="header-fullscreen flex flex-col items-center">
          <h1 className="text-primary text-center pt-32">
            Complete solution to manage and monitor mining operations
          </h1>
          <h3 className="text-salad text-center pt-8">
            The most functional render management approach
          </h3>
          <div className="mt-auto flex flex-col items-center">
            <AnchorLink href="#get-started">
              <h5 className="text-primary text-center cursor-pointer">
                scroll down
              </h5>
            </AnchorLink>
            <AnchorLink className="mt-2 mb-8" href="#get-started">
              <img src={arrow} alt=""></img>
            </AnchorLink>
          </div>
        </div>
        <div id="get-started" className="header-screen">
          <h2 className="text-primary text-center pt-24">
            Data mastery provides you with a user-friendly Renderfarm-Manager
          </h2>
          <h4 className="text-salad text-center pt-4">
            Choose between the various features and start managing your renders
            in no time!
          </h4>
          <img
            className="poster-img mt-16 mx-auto md:hidden"
            src={poster}
            alt="Data Mystery"
          ></img>
          <img
            className="poster-img mt-16 mx-auto hidden md:block"
            src={posterfull}
            alt="Data Mystery"
          ></img>
        </div>
        <img
          className="absolute w-40 top-[56px] -right-[70px] -z-10"
          src={figure}
          alt=""
        ></img>
        <img
          className="absolute top-[484px] left-8 -z-10"
          src={figure}
          alt=""
        ></img>
        <img
          className="absolute w-40 top-[140vh] -left-[70px] -z-10"
          src={figure}
          alt=""
        ></img>
      </div>
    </section>
  )
}

export default Header
