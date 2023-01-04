import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com'

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const [modalOpen, setModalOpen] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)

  const sendFormData = async (data, error) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    )
    reset()
    setSendSuccess(true)
  }
  return (
    <section id="userform">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform flex flex-col mt-4"
      >
        <input
          type="text"
          placeholder="Name*"
          {...register('name', { maxLength: 30, required: true })}
        />
        {errors.email?.type === 'required' && (
          <span className="error-span">Please tell us your name</span>
        )}
        <input
          type="email"
          placeholder="Email*"
          {...register('email', {
            required: true,
            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <span className="error-span">Please enter your email address</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span className="error-span">Please enter a valid email address</span>
        )}
        <input
          type="tel"
          placeholder="Contact No*"
          {...register('phone', {
            required: true,
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.phone?.type === 'required' && (
          <span className="error-span">Please enter your phone number</span>
        )}
        {errors.phone?.type === 'pattern' && (
          <span className="error-span">Please enter a valid phone number</span>
        )}
        <input
          type="text"
          placeholder="Company*"
          {...register('company', { required: true })}
          aria-invalid={errors.company ? 'true' : 'false'}
        />
        {errors.company && (
          <span className="error-span">
            Please tell us company you`re working in
          </span>
        )}
        <input
          aria-multiline
          type=""
          placeholder="Message*"
          defaultValue=""
          {...register('message')}
        />
        {sendSuccess && (
          <span className="success-span">
            Your data was sent successfully! We`ll contact you as soon as
            possible.
          </span>
        )}
        <button type="submit" className="submit-btn">
          FREE DEMO
        </button>
      </form>
    </section>
  )
}

export default UserForm
