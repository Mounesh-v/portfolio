import React, { useState } from "react";
import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mouneshv776@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div
      id="contact"
      className="isolate text-white px-6 py-24 sm:py-32 lg:px-8 bg-gray-800"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center">
          Contact
        </h2>
        <div className="relative my-6 text-center">
          <hr className="border-t border-orange-500 mx-auto w-1/3" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rounded-full shadow-md" />
        </div>

        {/* Grid container */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Left side: Contact Info Box */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-orange-400">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Get in Touch
            </h3>
            <p className="text-white text-lg">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's build something incredible together!
            </p>

            {/* Phone Box */}
            <a
              href="tel:+916362533696"
              className="flex items-center gap-4 mb-5 p-4 my-10 bg-gray-800 rounded-lg shadow-md border border-orange-500 hover:bg-gray-700 transition-all duration-300"
            >
              <FaPhoneAlt className="text-orange-400 text-2xl" />
              <p className="text-lg font-medium text-white">+91 6362533696</p>
            </a>

            {/* LinkedIn Box */}
            <a
              href="https://www.linkedin.com/in/mounesh-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-5 p-4 bg-gray-800 rounded-lg shadow-md border border-blue-500 hover:bg-gray-700 transition-all duration-300"
            >
              <FaLinkedin className="text-blue-400 text-2xl" />
              <p className="text-lg font-medium text-white break-all">
                linkedin.com/in/mounesh-v/
              </p>
            </a>

            {/* Email Box */}
            <a
              href="mailto:mouneshv696@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md border border-red-400 hover:bg-gray-700 transition-all duration-300"
            >
              <FaEnvelope className="text-red-400 text-2xl" />
              <p className="text-lg font-medium text-white break-all">
                mouneshv696@gmail.com
              </p>
            </a>

            <div className="mt-14 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Let's Connect
              </h3>
              <div className="flex justify-center gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mounesh-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition duration-200"
                >
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Mounesh-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-200"
                >
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full">
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                ></textarea>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Submit
              </button>
            </div>

            {submitted && (
              <div className="mt-6 text-center text-green-400 text-lg font-medium">
                ✅ Thank you for reaching out! I’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
