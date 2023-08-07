// contactme.tsx
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

interface Props {}

export const ContactMe = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm('service_4ljnm2r', 'template_e6p8b5h', formRef.current, '3ymUBOqrOlyDsYSVp')
        .then(
          (response) => {
            console.log('Email sent successfully!', response);
            setSuccessMessage('Email sent successfully!');
            setErrorMessage(null);
          },
          (error) => {
            console.log('Failed to send email:', error);
            setErrorMessage('Failed to send email. Please try again later.');
            setSuccessMessage(null);
          }
        );
    }
  };
  return (
    <div id="contact" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-green-500 sm:text-3xl">Contact Me</h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">Get in touch with me!!</p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8 shadow-green-900"
        >
          <p className="text-center text-lg font-medium text-green-500">Send Message</p>
          {successMessage && (
            <div className="text-center text-green-500 mt-4">{successMessage}</div>
          )}

          {errorMessage && (
            <div className="text-center text-red-500 mt-4">{errorMessage}</div>
          )}

          <div>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded border-green-500 p-4 pe-12 text-sm shadow-sm text-green-500 bg-black border-2 focus:ring focus:border-green-500 focus:outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <textarea
                name="message"
                className="w-full rounded border-green-500 p-4 pe-12 text-sm shadow-sm text-green-500 bg-black border-2 focus:ring focus:border-green-500 focus:outline-none"
                placeholder="Enter message"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            >
              <span className="absolute inset-0 border border-green-600 group-active:border-green-500"></span>
              <span className="block border border-green-600 bg-green-600 px-12 py-3 transition-transform active:border-green-500 active:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
