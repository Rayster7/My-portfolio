import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-2xl bg-opacity-90 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404: Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <p className="text-lg">
        You can try going back to the <a href="/" className="text-blue-600 hover:text-blue-800">home page</a> or
        contact me at <a href="/contact" className="text-blue-600 hover:text-blue-800">this page</a> if you need help.
      </p>
    </div>
  );
};

export default NotFoundPage;