import React from 'react';
import WdService from '../components/WdService';
import blog from '../Images/blog.png';
import userList from '../Images/user-list.png';
import eCommerce from '../Images/e-commerce.png';
import webGame from '../Images/web-game.png';
import 'animate.css'; // Importation de Animate.css

function WdServices() {
  const wdServices = [
    {
      id: 1,
      name: "E-commerce",
      imageId: eCommerce,
      projectUrl: "https://ecommerce-material-owobe3m3i-rayster7s-projects.vercel.app/", 
    },
    {
      id: 2,
      name: "Blog",
      imageId: blog,
      projectUrl: "https://blog-markdown-five.vercel.app", 
    },
    {
      id: 3,
      name: "Web Game",
      imageId: webGame, 
      projectUrl: "https://web-game-project.vercel.app", 
    },
    {
      id: 4,
      name: "User List",
      imageId: userList,
      projectUrl: "https://github-users-list-app-rayster7s-projects.vercel.app/", 
    },
  ];

  return (
    <div className="container py-4 bg-slate-50 rounded-2xl bg-opacity-90">
      <div className="row py-6">
        <h1 className='text-center text-3xl font-bold mb-6'>Web Development Services</h1>
        {wdServices.map((service, index) => (
          <div 
            key={service.id} 
            className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInUp" // Animation de fade-in-up
          >
            <a 
              href={service.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <WdService 
                name={service.name} 
                imageId={service.imageId} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100">
                <p className="text-white text-lg font-semibold">{service.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WdServices;
