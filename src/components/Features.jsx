import React from 'react'
import check from '../assets/check-circle.svg'
import figure from '../assets/Rectangle 27.svg'

const Features = () => {
  return (
    <section id="features">
      <div className="bg-features relative flex flex-col items-center py-16 px-4 sm:px-12 md:px-24 lg:px-36 overflow-hidden">
        <h2 className="text-primary text-center">Features</h2>
        <div className="features-container flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-x-8 lg:w-full">
          <div className="features">
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Customization</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Renderer return</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Render freeze</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Frame file existence check</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Frame file size check</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Frame visual check</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">
                Realtime and after rendering error message check
              </h5>
            </article>
          </div>
          <div className="features">
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Remote batch execution</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Client status</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">3D APPLICATIONS integration</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">
                Workers management with SSH commands
              </h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Mass managing</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Setting up overclocking</h5>
            </article>
            <article className="feature">
              <img src={check} alt=""></img>
              <h5 className="text-grey">Setting up mining settings</h5>
            </article>
          </div>
        </div>
        <img className='absolute w-36 bottom-10 left-3/4 -z-10' src={figure} alt=""></img>
      </div>
    </section>
  )
}

export default Features
