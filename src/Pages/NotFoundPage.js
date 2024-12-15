import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-2xl bg-opacity-90 items-center justify-center h-screen animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404: Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-700">Sorry, the page you're looking for doesn't exist.</p>
      <div className="space-y-4 text-center">
        <p className="text-lg">
          You can try going back to the <a href="/" className="text-blue-600 hover:text-blue-800">home page</a>.
        </p>
        <p className="text-lg">
          Or, if you need assistance, visit my <a href="/contact" className="text-blue-600 hover:text-blue-800">contact page</a>.
        </p>
      </div>
      <a 
        href="/" 
        className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
