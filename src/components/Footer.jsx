import React from 'react'
import UserForm from './UserForm'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <section id="contact-us">
      <div className="footer-container px-4 sm:px-12 md:px-24 lg:px-36 pt-16 pb-16 flex flex-col relative overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-16">
        <article className="form-block bg-[#fafbfb] w-full mt-12">
          <h2 className="text-primary">Contact us today</h2>
          <UserForm />
        </article>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <article className="mt-4">
              <h5 className="text-primary my-8">Contact us, book a demo</h5>
              <h5 className="text-primary my-8">Kick-off and intro</h5>
              <h5 className="text-primary my-8">System setup instructions</h5>
              <h5 className="text-primary my-8">
                Get started with your render mines
              </h5>
            </article>
            <article className="flex mt-4 md:ml-auto md:mt-12">
              <a
                href="https://www.facebook.com/profile.php?id=100089044061522"
                target="_blank"
              >
                <img className="w-12 mr-4" src={facebook}></img>
              </a>
              <a
                href="https://instagram.com/data_mastery2022?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img className="w-12 mr-4" src={instagram}></img>
              </a>
            </article>
          </div>
          <div className="footer-info mt-12 lg:mt-auto">
            <p>Legal information:</p>
            <p>Company name: JMIND</p>
            <p>
              Legal address: Emmanouil Roidi, 10-12 2nd floor Agla Zoni, 3031,
              Limassol, Cyprus
            </p>
            <div className="h-6"></div>
            <p>J.S. SPORTAITMENT CYPRUS LTD</p>
            <p>
              Emmanouil Roidi, 10-12 2nd floor Agla Zoni, 3031, Limassol, Cyprus
            </p>
            <a
              href="https://drive.google.com/file/d/1uXEzUuqCgS7cuWQHS09_GCGU3YzFFidc/view?usp=sharing"
              target="_blank"
            >
              <p>Terms and conditions</p>
            </a>
            <div className="h-6"></div>
            <a
              href="https://drive.google.com/file/d/1wg1zxoMqpdQhNaOu3fcOpWQGYkeG205w/view?usp=sharing"
              target="_blank"
            >
              <p>Privacy Policy</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
