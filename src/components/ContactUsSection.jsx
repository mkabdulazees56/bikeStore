import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 text-black py-16 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info Section */}
        <div className="md:pr-12">
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">
            Email, call, or complete the form to learn how our service can solve your problem.
          </p>
          <p className="text-lg font-medium">info@bikestore.lk</p>
          <p className="text-lg font-medium mb-4">+123-456-7890</p>

          <a href="/" className="text-green-600 font-semibold hover:underline">Customer Support</a>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our support team is available around the clock to address any concerns or queries you may have.
            </p>
            <h3 className="text-lg font-bold mb-2">Feedback and Suggestions</h3>
            <p className="text-sm text-gray-600 mb-4">
              We value your feedback and are continuously working to improve. Your input is crucial in shaping the future of our service.
            </p>
            <h3 className="text-lg font-bold mb-2">Media Inquiries</h3>
            <p className="text-sm text-gray-600 mb-4">
              For media-related questions, please contact us at media@bikeapp.com.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-500 mb-6">You can reach us anytime</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400"
              />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                className="border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
                <option value="+62">+62</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows="4"
              maxLength="120"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            By contacting us, you agree to our <a href="/" className="text-green-500 underline">Terms of Service</a> and <a href="/" className="text-green-500 underline">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
