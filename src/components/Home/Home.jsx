import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 transition-transform duration-500 transform hover:scale-105">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-6">
            <div className="max-w-xl text-center sm:text-left sm:ml-auto animate-fade-in">
              <h2 className="text-4xl font-bold sm:text-5xl transition transform duration-700 hover:translate-y-1 hover:text-blue-600">
                Welcome to Your Next Adventure
              </h2>

              <p className="text-lg text-gray-600 mt-4 transition-opacity duration-500 hover:opacity-75">
                Dive into the world of technology with us! Discover innovative
                solutions that propel your business forward.
              </p>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                to="/explore"
              >
                Explore Now
              </Link>
            </div>

            <div className="flex-shrink-0 animate-fade-in transform transition duration-700 hover:scale-110">
              <img
                className="sm:w-96 w-48"
                src="https://i.ibb.co/2M7rtLk/Remote1.png"
                alt="Teamwork"
              />
            </div>
          </div>
        </div>
      </aside>

      <h1 className="text-center text-3xl sm:text-5xl py-10 font-medium animate-slide-in transition transform duration-700 hover:scale-105">
        Innovate. Inspire. Impact.
      </h1>

      <div className="text-center mt-10">
        <p className="text-lg text-gray-600 transition-transform duration-500 hover:translate-x-1">
          Join us in our mission to revolutionize the tech landscape. Let’s
          create something extraordinary together!
        </p>
      </div>
    </div>
  );
}
