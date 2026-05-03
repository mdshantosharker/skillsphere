import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black px-6">
      <div className="text-center max-w-md">
        <div className="text-9xl font-extrabold text-white tracking-widest">
          404
        </div>

        <div className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">
          Page Not Found
        </div>

        <p className="mt-3 text-gray-400">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-blue-600 rounded-full shadow-lg group"
          >
            <span className="absolute top-0 left-0 w-full h-full -mt-1 transition-all duration-300 ease-in-out bg-blue-700 group-hover:mt-0 group-hover:bg-blue-800"></span>
            <span className="absolute inset-0 w-full h-full opacity-30 bg-linear-to-b from-white to-transparent"></span>
            <span className="relative">Go Home</span>
          </a>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          If you think this is a mistake, please check the URL.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
