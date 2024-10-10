import React from 'react';

const User = () => {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-lg mx-auto animate-fade-in">
      {/* User Avatar */}
      <img
        src="data:image/jpeg;base64,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" // Replace with your actual image URL
        alt="Satish Thodeti"
        className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-6 transform hover:scale-110 transition duration-300 animate-bounce"
      />

      {/* User Name and Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2 animate-slide-in">
        🌟 Satish Thodeti
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        💻 Software Engineer | 👽 Backend Specialist
      </p>

      {/* About Me */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 About Me:</h2>
      <p className="text-gray-600 text-center mb-6">
        With years of experience in backend development, I am passionate about creating strong, efficient systems. ⚙️ I love solving complex problems and always aim to build secure and scalable solutions. 🔒📈 My drive comes from a constant curiosity and a dedication to innovation in technology. 🚀
      </p>

      {/* Tech Stack */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">🌐 Tech Stack :</h3>
      <ul className="text-gray-600 text-left mb-6 space-y-2 animate-fade-in">
        <li>🔹 Node.js | Express.js | NPM</li>
        <li>🔹 PostgreSQL | MongoDB | SQLite</li>
        <li>🔹 JavaScript | ES6 | EJS</li>
        <li>🔹 REST APIs | Socket.IO</li>
        <li>🔹 JWT | Authentication | Authorization</li>
        <li>🔹 HTML | CSS</li>
        <li>🔹 Python | Developer Foundations</li>
        <li>🔹 Git | GitHub | Bitbucket | JIRA</li>
        <li>🔹 VS Code | Postman | Swagger</li>
        <li>🔹 Windows</li>
      </ul>

      {/* Top Skills */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">🔧 Top Skills:</h3>
      <ul className="text-gray-600 text-left mb-6 space-y-2 animate-slide-in">
        <li>🟢 Node.js</li>
        <li>🗄️ SQL</li>
        <li>🌐 Back-End Web Development</li>
        <li>🟨 JavaScript</li>
        <li>🚂 Express.js</li>
      </ul>

      {/* Connect Button */}
      <a
        href="https://www.linkedin.com/in/satishthodeti/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105"
      >
        Connect with Me on LinkedIn
      </a>
    </div>
  );
};

export default User;
