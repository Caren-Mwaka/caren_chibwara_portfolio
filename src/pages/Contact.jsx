import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-10 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-lg">Feel free to reach out for collaboration or inquiries.</p>

      {/* Contact Form */}
      <form 
        action="https://formspree.io/f/mzzdadgo" 
        method="POST" 
        className="mt-8 flex flex-col space-y-4 max-w-lg mx-auto"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        ></textarea>
        <button 
          type="submit" 
          className="bg-[#268995] text-white px-6 py-3 rounded-md hover:bg-[#1b6b7a] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
