import React from 'react'
import benefit1 from '../assets/benefit1.jpg'
import benefit2 from '../assets/benefit2.jpg'
import benefit3 from '../assets/benefit3.jpg'
import benefit4 from '../assets/benefit4.jpg'
import benefit5 from '../assets/benefit5.jpg'
import figure from '../assets/Rectangle 27.svg'

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="bg-benefits px-4 sm:px-8 md:px-16 lg:px-36 py-16 flex flex-col items-center relative overflow-hidden">
        <h2 className="text-primary text-center">Key benefits</h2>
        <h4 className="text-salad text-center pt-4">
          Choose between the various features and start managing your renders in
          no time!
        </h4>
        <div className="benefits flex flex-col items-center">
          <article className="benefit flex flex-col lg:flex-row lg:items-center mt-16">
            <img className="poster-img lg:order-last" src={benefit1} alt=""></img>
            <article>
              <h5 className="text-primary pt-8 lg:pt-0">Custom Workflows</h5>
              <p>
                Choose between the Super mode, where the order of the jobs
                reflects their priority, and the fully automatic Flawless mode
                with preset priority levels. You will have no trouble
                rearranging the queue by dragging and dropping your jobs.
              </p>
            </article>
          </article>
          <article className="benefit flex flex-col lg:flex-row lg:items-center mt-16">
            <img className="poster-img" src={benefit2} alt=""></img>
            <article>
              <h5 className="text-primary pt-8 lg:pt-0">
                Job-checking and error-handling
              </h5>
              <p>
                A render task is complete if all frames are on your hard disk,
                not when they have been sent to the render clients. It places a
                high focus on collaborating with your render jobs. It manages
                mistakes ranging from visual correctness analysis to renderer
                crashes.
              </p>
            </article>
          </article>
          <article className="benefit flex flex-col lg:flex-row lg:items-center mt-16">
            <img className="poster-img  lg:order-last" src={benefit3} alt=""></img>
            <article>
              <h5 className="text-primary pt-8 lg:pt-0">User management</h5>
              <p>
                Decide what users are allowed to do. Are they allowed to change,
                disable or even view the jobs of other users?
              </p>
            </article>
          </article>
          <article className="benefit flex flex-col lg:flex-row lg:items-center mt-16">
            <img className="poster-img" src={benefit4} alt=""></img>
            <article>
              <h5 className="text-primary pt-8 lg:pt-0">Cross Platform</h5>
              <p>
                All applications are available for Windows and Linux. Render
                simultaneously on multiple OS with some renderer applications
              </p>
            </article>
          </article>
          <article className="benefit flex flex-col lg:flex-row lg:items-center mt-16">
            <img className="poster-img  lg:order-last" src={benefit5} alt=""></img>
            <article>
              <h5 className="text-primary pt-8 lg:pt-0">24/7 Support</h5>
              <p>Contact our support team at any time.</p>
            </article>
          </article>
        </div>
        <img
          className="absolute top-4 -right-4 -z-10"
          src={figure}
          alt=""
        ></img>
        <img
          className="absolute w-8 top-[640px] left-4 -z-5"
          src={figure}
          alt=""
        ></img>
        <img
          className="absolute w-16 bottom-[320px] -left-4 -z-10"
          src={figure}
          alt=""
        ></img>
        <img
          className="absolute w-24 bottom-[820px] left-1/2 -z-10"
          src={figure}
          alt=""
        ></img>
      </div>
    </section>
  )
}

export default Benefits
