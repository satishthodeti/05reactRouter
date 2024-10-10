import React from "react";
import { Link } from "react-router-dom";

export default function Github() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* GitHub Logo */}
          <div className="md:4/12 lg:w-4/12 animate-bounce">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-24 h-24 object-contain mx-auto transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          {/* Text Content */}
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Explore My GitHub Projects
            </h2>
            <p className="mt-6 text-gray-600">
              This page showcases my open-source contributions and personal
              projects. I am passionate about backend development, open-source
              contributions, and building innovative solutions.
            </p>
            <p className="mt-4 text-gray-600">
              Feel free to check out my repositories, explore the code, and
              collaborate. If you have any questions or suggestions, you can
              reach me via GitHub.
            </p>

            {/* GitHub Profile Link */}
            <div className="mt-6">
              <Link
                to="https://github.com/satishthodeti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
              >
                Visit My GitHub Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
