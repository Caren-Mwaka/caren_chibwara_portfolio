import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-4xl font-bold text-[#268995] text-center font-montserrat">Get in Touch</h2>
        <p className="mt-3 text-gray-600 text-center">
          Feel free to reach out for collaboration or inquiries.
        </p>

        {/* Contact Form */}
        <form 
          action="https://formspree.io/f/mzzdadgo" 
          method="POST" 
          className="mt-6 flex flex-col space-y-6"
        >
          {/* Name Input */}
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              required 
              className="peer w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#268995]" 
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#268995] transition-all">
              Your Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              required 
              className="peer w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#268995]" 
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#268995] transition-all">
              Your Email
            </label>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea 
              name="message" 
              required 
              rows="5" 
              className="peer w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#268995]" 
              placeholder=" "
            ></textarea>
            <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#268995] transition-all">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#268995] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#1b6b7a] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
