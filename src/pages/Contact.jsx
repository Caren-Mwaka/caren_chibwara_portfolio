import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-10 text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold text-[#268995]">Get In Touch</h2>
      <p className="mt-4 text-lg text-gray-700">I'd love to connect! Reach out for collaborations, inquiries, or just to say hello. </p>

      {/* Contact Form */}
      <form className="mt-8 flex flex-col space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#268995]"
        ></textarea>
        <button className="bg-[#268995] text-white px-6 py-3 rounded-md hover:bg-[#1b6b7a] transition duration-300">
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-10 text-gray-700">
        <p><strong>Email:</strong> example@email.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contact;
