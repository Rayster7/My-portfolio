import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import About from '../components/About';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4 rounded-2xl bg-opacity-80">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m a passionate graphic designer and web developer with a knack for creating stunning visual designs and functional web applications.
        </p>
      </header>

      {/* Optional About Section */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <About />
      </section>

      {/* Skills & Tools Section */}
      <section className="w-full max-w-4xl mx-auto mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills & Tools</h2>
        <p className="text-gray-600 mb-4">
          Here are some of the key skills and tools I use in my work:
        </p>
        <div className="space-y-8">
          {/* Graphic Design Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Graphic Design</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-4">
              <li>
                Adobe Photoshop
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      90%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                Adobe Illustrator
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      95%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Web Development Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Web Development</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-4">
              <li>
                HTML
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      90%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                CSS
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      85%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-400 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                JavaScript
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      85%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                React
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      80%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                Node.js
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200">
                      75%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-800 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Version Control Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Version Control</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-4">
              <li>
                Git
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200">
                      95%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                GitHub
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200">
                      90%
                    </div>
                  </div>
                  <div className="flex-grow h-2 mt-1 bg-gray-200 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optional Services Section */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <Services />
      </section>

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto space-y-8">
        {/* Graphic Design Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Graphic Design</h2>
          <p className="text-gray-600 mb-4">
            Explore my graphic design projects where creativity meets functionality. From branding to digital art, see how I can bring your ideas to life.
          </p>
          <Link
            to="/gd-services"
            className="inline-block no-underline bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View Graphic Design Services
          </Link>
        </section>

        {/* Web Development Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Web Development</h2>
          <p className="text-gray-600 mb-4">
            Check out my web development work where functionality meets elegance. I create responsive, user-friendly websites and web applications.
          </p>
          <Link
            to="/wd-services"
            className="inline-block no-underline bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            View Web Development Services
          </Link>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-gray-600 mb-4">
            Have a question or want to discuss a project? Reach out to me and I’ll get back to you as soon as possible.
          </p>
          <Link
            to="/contact"
            className="inline-block no-underline bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Contact Me
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
