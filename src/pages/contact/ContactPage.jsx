// src/components/ContactPage.js

import { useState } from "react";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const { darkTheme, siteName } = useDevice();
  return (
    <section data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>Contact || {siteName}</title>
      </Helmet>
      <Header />
      <div className="py-24 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-extrabold text-center  mb-8">
            Contact Us
          </h1>

          <div className="max-w-lg ">
            {/* Contact Form */}
            <div className=" rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold  mb-4">
                We&apos;d love to hear from you!
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block ">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm "
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block ">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm "
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 -600  font-semibold rounded-md hover:-700 focus:outline-none focus:ring-2  text-white bg-orange-500 hover:bg-orange-600"
                >
                  {isSubmitted ? "Thank you for your message!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactPage;
