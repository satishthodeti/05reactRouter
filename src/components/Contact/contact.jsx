import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import Toast components
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, tel } = formData;

    if (name && email && tel) {
      toast.success("Form submitted successfully! I will contact you later.");
    } else {
      toast.error("Please fill out all fields!");
    }
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-r from-gray-50 to-white sm:items-center sm:pt-0">
      <ToastContainer
        position="top-right" // Set position to top-right
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600 transition-transform duration-300 transform hover:translate-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Hyderabad, India
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 transition-transform duration-300 transform hover:translate-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 9133833066
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 transition-transform duration-300 transform hover:translate-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  satishthodeti39@gmail.com
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105"
              onSubmit={handleSubmit} // Add onSubmit event
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name} // Bind value
                  onChange={handleChange} // Handle change
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition duration-300 hover:bg-gray-200"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email} // Bind value
                  onChange={handleChange} // Handle change
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition duration-300 hover:bg-gray-200"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  value={formData.tel} // Bind value
                  onChange={handleChange} // Handle change
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition duration-300 hover:bg-gray-200"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
